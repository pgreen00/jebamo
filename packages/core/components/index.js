export { g as getAssetPath, r as render, s as setAssetPath, a as setNonce, b as setPlatformOptions } from './p-BE32ZzHI.js';
export { JeAccordion, defineCustomElement as defineCustomElementJeAccordion } from './je-accordion.js';
export { JeAlert, defineCustomElement as defineCustomElementJeAlert } from './je-alert.js';
export { JeBranch, defineCustomElement as defineCustomElementJeBranch } from './je-branch.js';
export { JeBreadcrumb, defineCustomElement as defineCustomElementJeBreadcrumb } from './je-breadcrumb.js';
export { JeBreadcrumbs, defineCustomElement as defineCustomElementJeBreadcrumbs } from './je-breadcrumbs.js';
export { JeButton, defineCustomElement as defineCustomElementJeButton } from './je-button.js';
export { JeButtonGroup, defineCustomElement as defineCustomElementJeButtonGroup } from './je-button-group.js';
export { JeCalendar, defineCustomElement as defineCustomElementJeCalendar } from './je-calendar.js';
export { JeCard, defineCustomElement as defineCustomElementJeCard } from './je-card.js';
export { JeCheckbox, defineCustomElement as defineCustomElementJeCheckbox } from './je-checkbox.js';
export { JeColor, defineCustomElement as defineCustomElementJeColor } from './je-color.js';
export { JeComp, defineCustomElement as defineCustomElementJeComp } from './je-comp.js';
export { JeControl, defineCustomElement as defineCustomElementJeControl } from './je-control.js';
export { JeDatepicker, defineCustomElement as defineCustomElementJeDatepicker } from './je-datepicker.js';
export { JeDaw, defineCustomElement as defineCustomElementJeDaw } from './je-daw.js';
export { JeDetails, defineCustomElement as defineCustomElementJeDetails } from './je-details.js';
export { JeDiscardForm, defineCustomElement as defineCustomElementJeDiscardForm } from './je-discard-form.js';
export { JeDivider, defineCustomElement as defineCustomElementJeDivider } from './je-divider.js';
export { JeDropzone, defineCustomElement as defineCustomElementJeDropzone } from './je-dropzone.js';
export { JeEq, defineCustomElement as defineCustomElementJeEq } from './je-eq.js';
export { JeForm, defineCustomElement as defineCustomElementJeForm } from './je-form.js';
export { JeGrid, defineCustomElement as defineCustomElementJeGrid } from './je-grid.js';
export { JeIcon, defineCustomElement as defineCustomElementJeIcon } from './je-icon.js';
export { JeItem, defineCustomElement as defineCustomElementJeItem } from './je-item.js';
export { JeKnob, defineCustomElement as defineCustomElementJeKnob } from './je-knob.js';
export { JeLabel, defineCustomElement as defineCustomElementJeLabel } from './je-label.js';
export { JeLink, defineCustomElement as defineCustomElementJeLink } from './je-link.js';
export { JeList, defineCustomElement as defineCustomElementJeList } from './je-list.js';
export { JeLoading, defineCustomElement as defineCustomElementJeLoading } from './je-loading.js';
export { JeMidi, defineCustomElement as defineCustomElementJeMidi } from './je-midi.js';
export { JeNote, defineCustomElement as defineCustomElementJeNote } from './je-note.js';
export { JeOption, defineCustomElement as defineCustomElementJeOption } from './je-option.js';
export { JeOverlay, defineCustomElement as defineCustomElementJeOverlay } from './je-overlay.js';
export { JeOverlayContent, defineCustomElement as defineCustomElementJeOverlayContent } from './je-overlay-content.js';
export { JePage, defineCustomElement as defineCustomElementJePage } from './je-page.js';
export { JePill, defineCustomElement as defineCustomElementJePill } from './je-pill.js';
export { JePlaceholder, defineCustomElement as defineCustomElementJePlaceholder } from './je-placeholder.js';
export { JePopover, defineCustomElement as defineCustomElementJePopover } from './je-popover.js';
export { JeRadio, defineCustomElement as defineCustomElementJeRadio } from './je-radio.js';
export { JeRadioButton, defineCustomElement as defineCustomElementJeRadioButton } from './je-radio-button.js';
export { JeRadioGroup, defineCustomElement as defineCustomElementJeRadioGroup } from './je-radio-group.js';
export { JeRange, defineCustomElement as defineCustomElementJeRange } from './je-range.js';
export { JeReorderItem, defineCustomElement as defineCustomElementJeReorderItem } from './je-reorder-item.js';
export { JeReorderList, defineCustomElement as defineCustomElementJeReorderList } from './je-reorder-list.js';
export { JeRichText, defineCustomElement as defineCustomElementJeRichText } from './je-rich-text.js';
export { JeSelect, defineCustomElement as defineCustomElementJeSelect } from './je-select.js';
export { JeSplitPanel, defineCustomElement as defineCustomElementJeSplitPanel } from './je-split-panel.js';
export { JeSplitView, defineCustomElement as defineCustomElementJeSplitView } from './je-split-view.js';
export { JeStack, defineCustomElement as defineCustomElementJeStack } from './je-stack.js';
export { JeSynth, defineCustomElement as defineCustomElementJeSynth } from './je-synth.js';
export { JeTab, defineCustomElement as defineCustomElementJeTab } from './je-tab.js';
export { JeTabs, defineCustomElement as defineCustomElementJeTabs } from './je-tabs.js';
export { JeTextfield, defineCustomElement as defineCustomElementJeTextfield } from './je-textfield.js';
export { JeToggle, defineCustomElement as defineCustomElementJeToggle } from './je-toggle.js';
export { JeToolbar, defineCustomElement as defineCustomElementJeToolbar } from './je-toolbar.js';
export { JeTooltip, defineCustomElement as defineCustomElementJeTooltip } from './je-tooltip.js';
export { JeTree, defineCustomElement as defineCustomElementJeTree } from './je-tree.js';
export { JeWizard, defineCustomElement as defineCustomElementJeWizard } from './je-wizard.js';

const createDialog = (options) => {
    const dialog = document.createElement('je-overlay');
    dialog.size = 'sm';
    dialog.setHTMLUnsafe(`
    <je-form>
      <div class="je-dialog-container">
        <template shadowrootmode="open">
          <style>
            :host {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              padding: 1rem;
              box-sizing: border-box;
            }
          </style>
          <je-toolbar>
            <slot name="icon"></slot>
            <slot name="header"></slot>
            <je-button slot="end">
              <je-icon>close</je-icon
            </je-button>
          </je-toolbar>
          <slot name="message"></slot>
          <slot name="controls"></slot>
          <slot name="buttons"></slot>
        </template>
      </div>
    </je-form>
  `);
    dialog.backdropDismiss = options.backdropDismiss;
    document.body.append(dialog);
    const container = dialog.querySelector('.je-dialog-container');
    if (options.header) {
        container.insertAdjacentHTML('afterbegin', `
      <h3 slot="header">${options.header}</h3>
    `);
    }
    if (options.message) {
        container.insertAdjacentHTML('beforeend', `
      <je-label slot="message">${options.message}</je-label>
    `);
    }
    if (options.icon) {
        container.insertAdjacentHTML('afterbegin', `
      <je-icon fill slot="icon">${options.icon}</je-icon>
    `);
    }
    if (options.controls) {
        container.insertAdjacentHTML('beforeend', `
      <div slot="controls" class="je-dialog-controls"></div>
    `);
        const controls = container.querySelector('.je-dialog-controls');
        options.controls.forEach(control => {
            const input = document.createElement('je-textfield');
            input.label = control.label;
            input.placeholder = control.placeholder;
            //input.validators = control.validators;
            input.required = control.required;
            //input.type = control.type;
            input.setAttribute('name', control.name);
            input.originalValue = control.originalValue;
            input.value = control.value;
            input.debounce = control.debounce;
            input.addEventListener('valueChange', control.valueChangeHandler);
            controls.append(input);
        });
    }
    if (options.buttons) {
        container.insertAdjacentHTML('beforeend', `
      <je-toolbar slot="buttons" class="je-dialog-buttons"></je-toolbar>
    `);
        const buttons = container.querySelector('.je-dialog-buttons');
        options.buttons.forEach(button => {
            const btn = document.createElement('je-button');
            btn.textContent = button.text;
            btn.fill = button.fill;
            btn.color = button.color;
            btn.type = button.type;
            btn.size = button.size;
            btn.slot = 'end';
            if (button.handler)
                btn.addEventListener('click', () => button.handler(dialog));
            buttons.append(btn);
        });
    }
    const closeButton = container.shadowRoot.querySelector('je-button');
    closeButton.addEventListener('click', () => dialog.hide(), { once: true });
    const form = dialog.querySelector('je-form');
    form.addEventListener('submit', () => dialog.hide(), { once: true });
    dialog.addEventListener('dismiss', () => dialog.remove(), { once: true });
    return [dialog, form];
};

const createToast = (options) => {
    const toast = document.createElement('je-alert');
    toast.color = options.color;
    toast.duration = options.duration;
    toast.closable = options.closable;
    if (options.buttons) {
        options.buttons.forEach(button => {
            const btn = document.createElement('je-button');
            btn.textContent = button.text;
            btn.fill = button.fill;
            btn.color = button.color;
            btn.size = button.size ?? 'sm';
            btn.slot = 'buttons';
            if (button.handler)
                btn.addEventListener('click', () => button.handler(toast));
            toast.append(btn);
        });
    }
    let container = document.querySelector(`div.je-toast-container[data-position=${options.position}]`);
    if (!container) {
        container = document.createElement('div');
        container.dataset.position = options.position;
        document.body.append(container);
        container.popover = 'manual';
        //needs mutation observer
    }
    container.append(toast);
    toast.didDismiss().then(() => {
        toast.remove();
    });
    return toast;
};

class InputMask {
    element;
    isContentEditable;
    formatter;
    extractor;
    masker;
    rawValue;
    formattedValue;
    constructor({ inputElement, formatter, extractor = val => val, masker }) {
        this.element = inputElement;
        this.isContentEditable = inputElement instanceof HTMLElement && inputElement.isContentEditable;
        this.formatter = formatter;
        this.extractor = extractor;
        this.masker = masker;
        this.rawValue = this.extractor(this.getValue());
        this.formattedValue = this.formatter(this.rawValue);
        this.setValue(this.getDisplayValue());
        this.element.addEventListener("keydown", this.handleKeyDown);
        this.element.addEventListener("input", this.handleInput);
    }
    getValue() {
        if (this.isContentEditable) {
            return this.element.textContent || '';
        }
        return this.element.value;
    }
    setValue(value) {
        if (this.isContentEditable) {
            this.element.textContent = value;
        }
        else {
            this.element.value = value;
        }
    }
    getCursorPosition() {
        if (this.isContentEditable) {
            const selection = window.getSelection();
            if (!selection || selection.rangeCount === 0)
                return null;
            const range = selection.getRangeAt(0);
            const preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(this.element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            return preCaretRange.toString().length;
        }
        return this.element.selectionStart;
    }
    getSelectionEnd() {
        if (this.isContentEditable) {
            const selection = window.getSelection();
            if (!selection || selection.rangeCount === 0)
                return null;
            const range = selection.getRangeAt(0);
            const preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(this.element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            return preCaretRange.toString().length;
        }
        return this.element.selectionEnd;
    }
    getDisplayValue() {
        if (this.masker) {
            return this.masker(this.rawValue, this.formattedValue);
        }
        return this.formattedValue;
    }
    handleKeyDown = (e) => {
        if (e.key === "Backspace" || e.key === "Delete") {
            const cursorPos = this.getCursorPosition();
            const selectionEnd = this.getSelectionEnd();
            if (cursorPos === null || selectionEnd === null)
                return;
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
            }
            else if (e.key === "Delete" && cursorPos < valueToCheck.length) {
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
    };
    deleteRawCharacter(direction, cursorPos) {
        const rawPos = this.getRawCursorPosition(this.formattedValue, cursorPos);
        // Delete from raw value
        if (direction === "backspace" && rawPos > 0) {
            this.rawValue =
                this.rawValue.slice(0, rawPos - 1) + this.rawValue.slice(rawPos);
            this.updateAndPosition(rawPos - 1);
        }
        else if (direction === "delete" && rawPos < this.rawValue.length) {
            this.rawValue =
                this.rawValue.slice(0, rawPos) + this.rawValue.slice(rawPos + 1);
            this.updateAndPosition(rawPos);
        }
    }
    updateAndPosition(targetRawPos) {
        this.formattedValue = this.formatter(this.rawValue);
        this.setValue(this.getDisplayValue());
        const newCursorPos = this.getFormattedCursorPosition(targetRawPos);
        this.setCursor(newCursorPos);
    }
    handleInput = () => {
        const cursorPos = this.getCursorPosition();
        if (cursorPos === null)
            return;
        const inputValue = this.getValue();
        const prevDisplayValue = this.getDisplayValue();
        // When masking is enabled, we need to extract from the actual characters typed
        // not the masked display. We'll track what actually changed.
        let newRawValue;
        if (this.masker) {
            // Get raw cursor position before the change
            const prevRawCursorPos = this.getRawCursorPosition(this.formattedValue, cursorPos);
            if (inputValue.length > prevDisplayValue.length) {
                // User added characters - extract the new characters
                const diff = inputValue.length - prevDisplayValue.length;
                const typedChars = inputValue.substring(cursorPos - diff, cursorPos);
                const extractedTyped = this.extractor(typedChars);
                // Insert into raw value at cursor position
                const candidateRawValue = this.rawValue.slice(0, prevRawCursorPos) +
                    extractedTyped +
                    this.rawValue.slice(prevRawCursorPos);
                // Format to see what actually gets accepted
                const formattedCandidate = this.formatter(candidateRawValue);
                // Extract back to get the actual raw value that will be used
                newRawValue = this.extractor(formattedCandidate);
            }
            else if (inputValue.length < prevDisplayValue.length) {
                // User deleted characters
                const diff = prevDisplayValue.length - inputValue.length;
                // Delete from raw value at cursor position
                newRawValue =
                    this.rawValue.slice(0, prevRawCursorPos) +
                        this.rawValue.slice(prevRawCursorPos + diff);
            }
            else {
                // No length change
                newRawValue = this.rawValue;
            }
        }
        else {
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
    };
    getRawCursorPosition(formattedValue, cursorPos) {
        // Count how many "raw" characters are before the cursor
        const extracted = this.extractor(formattedValue.substring(0, cursorPos));
        return extracted.length;
    }
    getFormattedCursorPosition(rawPos) {
        // Find the formatted position that corresponds to the raw position
        if (rawPos === 0)
            return 0;
        if (rawPos >= this.rawValue.length)
            return this.formattedValue.length;
        for (let i = 0; i < this.formattedValue.length; i++) {
            const charUpToHere = this.extractor(this.formattedValue.substring(0, i + 1));
            if (charUpToHere.length >= rawPos) {
                return i + 1;
            }
        }
        return this.formattedValue.length;
    }
    findNextRawCharPosition(startPos) {
        // Move cursor forward until we're right after a raw character
        // This handles cases where formatting characters are inserted
        for (let i = startPos; i <= this.formattedValue.length; i++) {
            const beforeExtracted = this.extractor(this.formattedValue.substring(0, i - 1));
            const atExtracted = this.extractor(this.formattedValue.substring(0, i));
            if (atExtracted.length > beforeExtracted.length) {
                return i;
            }
        }
        return startPos;
    }
    setCursor(position) {
        requestAnimationFrame(() => {
            if (this.isContentEditable) {
                const selection = window.getSelection();
                if (!selection)
                    return;
                const range = document.createRange();
                let currentPos = 0;
                let found = false;
                const traverse = (node) => {
                    if (found)
                        return;
                    if (node.nodeType === Node.TEXT_NODE) {
                        const textLength = node.textContent?.length || 0;
                        if (currentPos + textLength >= position) {
                            range.setStart(node, position - currentPos);
                            range.setEnd(node, position - currentPos);
                            found = true;
                            return;
                        }
                        currentPos += textLength;
                    }
                    else {
                        for (let i = 0; i < node.childNodes.length; i++) {
                            traverse(node.childNodes[i]);
                            if (found)
                                return;
                        }
                    }
                };
                traverse(this.element);
                if (found) {
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
            else {
                this.element.setSelectionRange(position, position);
            }
        });
    }
    [Symbol.dispose]() {
        this.element.removeEventListener("keydown", this.handleKeyDown);
        this.element.removeEventListener("input", this.handleInput);
    }
}

export { InputMask, createDialog, createToast };
//# sourceMappingURL=index.js.map

//# sourceMappingURL=index.js.map