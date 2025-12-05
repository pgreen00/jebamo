export interface InputMaskOptions {
  inputElement: HTMLInputElement
  formatter: (str: string) => string
  extractor?: (str: string) => string
  masker?: (rawValue: string, formattedValue: string) => string
}

export class InputMask {
  private input: HTMLInputElement
  private formatter: (str: string) => string
  private extractor: (str: string) => string
  private masker?: (rawValue: string, formattedValue: string) => string
  private rawValue: string
  private formattedValue: string

  constructor({ inputElement, formatter, extractor = val => val, masker }: InputMaskOptions) {
    this.input = inputElement
    this.formatter = formatter
    this.extractor = extractor
    this.masker = masker

    this.rawValue = this.extractor(this.input.value);
    this.formattedValue = this.formatter(this.rawValue);
    this.input.value = this.getDisplayValue();

    this.input.addEventListener("keydown", this.handleKeyDown);
    this.input.addEventListener("input", this.handleInput);
  }

  private getDisplayValue(): string {
    if (this.masker) {
      return this.masker(this.rawValue, this.formattedValue);
    }
    return this.formattedValue;
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      const cursorPos = this.input.selectionStart;
      const selectionEnd = this.input.selectionEnd;

      // If there's a selection, let it handle normally
      if (cursorPos !== selectionEnd) {
        return;
      }

      // Use formattedValue (not the masked display) for logic
      const valueToCheck = this.formattedValue;

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
    const rawPos = this.getRawCursorPosition(this.formattedValue, cursorPos);

    // Delete from raw value
    if (direction === "backspace" && rawPos > 0) {
      this.rawValue =
        this.rawValue.slice(0, rawPos - 1) + this.rawValue.slice(rawPos);
      this.updateAndPosition(rawPos - 1);
    } else if (direction === "delete" && rawPos < this.rawValue.length) {
      this.rawValue =
        this.rawValue.slice(0, rawPos) + this.rawValue.slice(rawPos + 1);
      this.updateAndPosition(rawPos);
    }
  }

  private updateAndPosition(targetRawPos: number) {
    this.formattedValue = this.formatter(this.rawValue);
    this.input.value = this.getDisplayValue();

    const newCursorPos = this.getFormattedCursorPosition(targetRawPos);
    this.setCursor(newCursorPos);
  }

  private handleInput = () => {
    const cursorPos = this.input.selectionStart;
    const inputValue = this.input.value;
    const prevDisplayValue = this.getDisplayValue();

    // When masking is enabled, we need to extract from the actual characters typed
    // not the masked display. We'll track what actually changed.
    let newRawValue: string;

    if (this.masker) {
      // Get raw cursor position before the change
      const prevRawCursorPos = this.getRawCursorPosition(this.formattedValue, cursorPos);

      if (inputValue.length > prevDisplayValue.length) {
        // User added characters - extract the new characters
        const diff = inputValue.length - prevDisplayValue.length;
        const typedChars = inputValue.substring(cursorPos - diff, cursorPos);
        const extractedTyped = this.extractor(typedChars);

        // Insert into raw value at cursor position
        const candidateRawValue =
          this.rawValue.slice(0, prevRawCursorPos) +
          extractedTyped +
          this.rawValue.slice(prevRawCursorPos);

        // Format to see what actually gets accepted
        const formattedCandidate = this.formatter(candidateRawValue);
        // Extract back to get the actual raw value that will be used
        newRawValue = this.extractor(formattedCandidate);
      } else if (inputValue.length < prevDisplayValue.length) {
        // User deleted characters
        const diff = prevDisplayValue.length - inputValue.length;

        // Delete from raw value at cursor position
        newRawValue =
          this.rawValue.slice(0, prevRawCursorPos) +
          this.rawValue.slice(prevRawCursorPos + diff);
      } else {
        // No length change
        newRawValue = this.rawValue;
      }
    } else {
      // Original behavior for non-masked inputs
      newRawValue = this.extractor(inputValue);
    }

    // Calculate cursor position in terms of raw characters
    const rawCursorPos = this.masker
      ? this.extractor(this.formattedValue.substring(0, cursorPos)).length
      : this.getRawCursorPosition(inputValue, cursorPos);
    // Determine what changed in the raw value
    const rawDiff = newRawValue.length - this.rawValue.length;

    // Update stored raw value
    this.rawValue = newRawValue;

    // Apply formatting
    this.formattedValue = this.formatter(this.rawValue);
    this.input.value = this.getDisplayValue();

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
    if (rawPos >= this.rawValue.length) return this.formattedValue.length;
    for (let i = 0; i < this.formattedValue.length; i++) {
      const charUpToHere = this.extractor(
        this.formattedValue.substring(0, i + 1)
      );
      if (charUpToHere.length >= rawPos) {
        return i + 1;
      }
    }

    return this.formattedValue.length;
  }

  private findNextRawCharPosition(startPos: number) {
    // Move cursor forward until we're right after a raw character
    // This handles cases where formatting characters are inserted
    for (let i = startPos; i <= this.formattedValue.length; i++) {
      const beforeExtracted = this.extractor(
        this.formattedValue.substring(0, i - 1)
      );
      const atExtracted = this.extractor(this.formattedValue.substring(0, i));

      if (atExtracted.length > beforeExtracted.length) {
        return i;
      }
    }
    return startPos;
  }

  private setCursor(position: number) {
    requestAnimationFrame(() => {
      this.input.setSelectionRange(position, position);
    });
  }

  [Symbol.dispose]() {
    this.input.removeEventListener("keydown", this.handleKeyDown);
    this.input.removeEventListener("input", this.handleInput);
  }
}

