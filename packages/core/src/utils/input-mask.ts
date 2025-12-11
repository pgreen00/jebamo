import { BehaviorSubject } from "rxjs"

export interface InputMaskOptions {
  inputElement: HTMLInputElement | HTMLElement
  formatter: (str: string) => string
  extractor?: (str: string) => string
  masker?: (rawValue: string, formattedValue: string) => string
}

export class InputMask {
  private element: HTMLInputElement | HTMLElement
  private isContentEditable: boolean
  private formatter: (str: string) => string
  private extractor: (str: string) => string
  private masker?: (rawValue: string, formattedValue: string) => string
  private rawValue: BehaviorSubject<string>
  private formattedValue: BehaviorSubject<string>

  constructor({ inputElement, formatter, extractor = val => val, masker }: InputMaskOptions) {
    this.element = inputElement
    this.isContentEditable = inputElement instanceof HTMLElement && inputElement.isContentEditable
    this.formatter = formatter
    this.extractor = extractor
    this.masker = masker

    this.rawValue = new BehaviorSubject(this.extractor(this.getValue()));
    this.formattedValue = new BehaviorSubject(this.formatter(this.rawValue.value));
    this.setValue(this.getDisplayValue());

    this.element.addEventListener("keydown", this.handleKeyDown);
    this.element.addEventListener("input", this.handleInput);
  }

  private getValue(): string {
    if (this.isContentEditable) {
      return (this.element as HTMLElement).textContent || '';
    }
    return (this.element as HTMLInputElement).value;
  }

  private setValue(value: string) {
    if (this.isContentEditable) {
      (this.element as HTMLElement).textContent = value;
    } else {
      (this.element as HTMLInputElement).value = value;
    }
  }

  private getSelection(): Selection | null {
    // Check if element is in a shadow root
    const root = this.element.getRootNode();
    if (root instanceof ShadowRoot && 'getSelection' in root) {
      return (root as any).getSelection();
    }
    return window.getSelection();
  }

  private getCursorPosition(): number | null {
    if (this.isContentEditable) {
      const selection = this.getSelection();
      if (!selection || selection.rangeCount === 0) return null;

      const range = selection.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(this.element);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      return preCaretRange.toString().length;
    }
    return (this.element as HTMLInputElement).selectionStart;
  }

  private getSelectionEnd(): number | null {
    if (this.isContentEditable) {
      const selection = this.getSelection();
      if (!selection || selection.rangeCount === 0) return null;

      const range = selection.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(this.element);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      return preCaretRange.toString().length;
    }
    return (this.element as HTMLInputElement).selectionEnd;
  }

  private getDisplayValue(): string {
    if (this.masker) {
      return this.masker(this.rawValue.value, this.formattedValue.value);
    }
    return this.formattedValue.value;
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      const cursorPos = this.getCursorPosition();
      const selectionEnd = this.getSelectionEnd();

      if (cursorPos === null || selectionEnd === null) return;

      // If there's a selection, let it handle normally
      if (cursorPos !== selectionEnd) {
        return;
      }

      // Use formattedValue (not the masked display) for logic
      const valueToCheck = this.formattedValue.value;

      // Check if we're about to delete a formatting character
      if (e.key === "Backspace" && cursorPos > 0) {
        const beforeSubstring = valueToCheck.substring(0, cursorPos - 1);
        const atSubstring = valueToCheck.substring(0, cursorPos);

        const beforeRaw = this.extractor(beforeSubstring);
        const atRaw = this.extractor(atSubstring);

        // If the character before cursor is a formatting character
        if (beforeRaw.length === atRaw.length) {
          e.preventDefault();
          this.deleteRawCharacter("backspace", cursorPos);
        }
      } else if (e.key === "Delete" && cursorPos < valueToCheck.length) {
        const atSubstring = valueToCheck.substring(0, cursorPos);
        const afterSubstring = valueToCheck.substring(0, cursorPos + 1);

        const atRaw = this.extractor(atSubstring);
        const afterRaw = this.extractor(afterSubstring);

        // If the character after cursor is a formatting character
        if (atRaw.length === afterRaw.length) {
          e.preventDefault();
          this.deleteRawCharacter("delete", cursorPos);
        }
      }
    }
  }

  private deleteRawCharacter(direction: string, cursorPos: number) {
    const rawPos = this.getRawCursorPosition(this.formattedValue.value, cursorPos);

    // Delete from raw value
    if (direction === "backspace" && rawPos > 0) {
      this.rawValue.next(
        this.rawValue.value.slice(0, rawPos - 1) + this.rawValue.value.slice(rawPos)
      );
      this.updateAndPosition(rawPos - 1);
    } else if (direction === "delete" && rawPos < this.rawValue.value.length) {
      this.rawValue.next(
        this.rawValue.value.slice(0, rawPos) + this.rawValue.value.slice(rawPos + 1)
      );
      this.updateAndPosition(rawPos);
    }
  }

  private updateAndPosition(targetRawPos: number) {
    this.formattedValue.next(this.formatter(this.rawValue.value));
    this.setValue(this.getDisplayValue());

    const newCursorPos = this.getFormattedCursorPosition(targetRawPos);
    this.setCursor(newCursorPos);
  }

  private handleInput = () => {
    const cursorPos = this.getCursorPosition();
    if (cursorPos === null) return;

    const inputValue = this.getValue();
    const prevDisplayValue = this.getDisplayValue();

    // When masking is enabled, we need to extract from the actual characters typed
    // not the masked display. We'll track what actually changed.
    let newRawValue: string;

    if (this.masker) {
      // Get raw cursor position before the change
      const prevRawCursorPos = this.getRawCursorPosition(this.formattedValue.value, cursorPos);

      if (inputValue.length > prevDisplayValue.length) {
        // User added characters - extract the new characters
        const diff = inputValue.length - prevDisplayValue.length;
        const typedChars = inputValue.substring(cursorPos - diff, cursorPos);
        const extractedTyped = this.extractor(typedChars);

        // Insert into raw value at cursor position
        const candidateRawValue =
          this.rawValue.value.slice(0, prevRawCursorPos) +
          extractedTyped +
          this.rawValue.value.slice(prevRawCursorPos);

        // Format to see what actually gets accepted
        const formattedCandidate = this.formatter(candidateRawValue);
        // Extract back to get the actual raw value that will be used
        newRawValue = this.extractor(formattedCandidate);
      } else if (inputValue.length < prevDisplayValue.length) {
        // User deleted characters
        const diff = prevDisplayValue.length - inputValue.length;

        // Delete from raw value at cursor position
        newRawValue =
          this.rawValue.value.slice(0, prevRawCursorPos) +
          this.rawValue.value.slice(prevRawCursorPos + diff);
      } else {
        // No length change
        newRawValue = this.rawValue.value;
      }
    } else {
      // Original behavior for non-masked inputs
      newRawValue = this.extractor(inputValue);
    }

    // Calculate cursor position in terms of raw characters
    const rawCursorPos = this.masker
      ? this.extractor(this.formattedValue.value.substring(0, cursorPos)).length
      : this.getRawCursorPosition(inputValue, cursorPos);
    // Determine what changed in the raw value
    const rawDiff = newRawValue.length - this.rawValue.value.length;

    // Update stored raw value
    this.rawValue.next(newRawValue);

    // Apply formatting
    this.formattedValue.next(this.formatter(this.rawValue.value));
    this.setValue(this.getDisplayValue());

    // Calculate new cursor position
    let newCursorPos = this.getFormattedCursorPosition(rawCursorPos + (rawDiff > 0 ? rawDiff : 0));

    // If we're adding characters, move cursor forward past any formatting
    if (rawDiff > 0) {
      // Make sure cursor is after the newly typed character(s)
      newCursorPos = this.findNextRawCharPosition(newCursorPos);
    }

    // Set cursor position
    this.setCursor(newCursorPos);
  }

  private getRawCursorPosition(formattedValue: string, cursorPos: number) {
    // Count how many "raw" characters are before the cursor
    const extracted = this.extractor(formattedValue.substring(0, cursorPos));
    return extracted.length;
  }

  private getFormattedCursorPosition(rawPos: number) {
    // Find the formatted position that corresponds to the raw position
    if (rawPos === 0) return 0;
    if (rawPos >= this.rawValue.value.length) return this.formattedValue.value.length;
    for (let i = 0; i < this.formattedValue.value.length; i++) {
      const charUpToHere = this.extractor(
        this.formattedValue.value.substring(0, i + 1)
      );
      if (charUpToHere.length >= rawPos) {
        return i + 1;
      }
    }

    return this.formattedValue.value.length;
  }

  private findNextRawCharPosition(startPos: number) {
    // Move cursor forward until we're right after a raw character
    // This handles cases where formatting characters are inserted
    for (let i = startPos; i <= this.formattedValue.value.length; i++) {
      const beforeExtracted = this.extractor(
        this.formattedValue.value.substring(0, i - 1)
      );
      const atExtracted = this.extractor(this.formattedValue.value.substring(0, i));

      if (atExtracted.length > beforeExtracted.length) {
        return i;
      }
    }
    return startPos;
  }

  private setCursor(position: number) {
    requestAnimationFrame(() => {
      if (this.isContentEditable) {
        const selection = this.getSelection();
        if (!selection) return;

        const range = document.createRange();
        let currentPos = 0;
        let found = false;

        const traverse = (node: Node) => {
          if (found) return;

          if (node.nodeType === Node.TEXT_NODE) {
            const textLength = node.textContent?.length || 0;
            if (currentPos + textLength >= position) {
              range.setStart(node, position - currentPos);
              range.setEnd(node, position - currentPos);
              found = true;
              return;
            }
            currentPos += textLength;
          } else {
            for (let i = 0; i < node.childNodes.length; i++) {
              traverse(node.childNodes[i]);
              if (found) return;
            }
          }
        };

        traverse(this.element);

        if (found) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } else {
        (this.element as HTMLInputElement).setSelectionRange(position, position);
      }
    });
  }

  [Symbol.dispose]() {
    this.element.removeEventListener("keydown", this.handleKeyDown);
    this.element.removeEventListener("input", this.handleInput);
  }
}

