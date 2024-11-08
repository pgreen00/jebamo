import { Component, Host, Prop, h, Element, Listen, Watch } from '@stencil/core';

@Component({
  tag: 'je-select',
  styleUrl: 'je-select.scss',
  shadow: {
    delegatesFocus: true
  },
  formAssociated: true
})
export class JeSelect {
  @Element() el: HTMLElement;
  private inputEl!: HTMLJeInputElement;
  private popoverEl!: HTMLJePopoverElement;
  private originalValue?: string;
  @Prop() label?: string;
  @Prop() placeholder?: string;
  @Prop({ mutable: true }) value?: string;
  @Prop() expand?: boolean;
  @Prop() required?: boolean;

  componentDidLoad() {
    this.originalValue = this.value;
  }

  componentWillLoad() {
    if (!this.el.getAttribute('name') && this.label) {
      this.el.setAttribute('name', this.label);
    }
  }

  formResetCallback() {
    this.value = this.originalValue;
    const options = Array.from(this.el.querySelectorAll('je-select-option'));
    if (!options.some(t => t.value === this.value)) {
      this.inputEl.value = '';
    }
  }

  @Listen('popoverDismiss')
  handlePopoverDismiss() {
    const options = this.el.querySelectorAll('je-select-option');
    options.forEach(option => option.classList.remove('focus'));
  }

  @Listen('optionSelected')
  handleOptionSelected(event: CustomEvent<string>) {
    this.value = event.detail;
  }

  @Watch('value')
  handleValueChange() {
    const options = this.el.querySelectorAll('je-select-option');
    options.forEach(option => {
      if (option.value === this.value) {
        option.selected = true;
        this.inputEl.value = option.textContent || option.value;
      } else {
        option.selected = false;
      }
    });
  }

  private focusOption(option: HTMLJeSelectOptionElement) {
    option.classList.add('focus')
  }

  private blurOption(option: HTMLJeSelectOptionElement) {
    option.classList.remove('focus')
  }

  private hasFocus(option: HTMLJeSelectOptionElement) {
    return option.classList.contains('focus');
  }

  @Listen('keydown', { capture: true })
  handleKeyDown(event: KeyboardEvent) {
    const open = this.popoverEl.open;
    if (open || (event.key !== 'Tab' && event.key !== 'Enter')) {
      event.preventDefault();
      event.stopPropagation();
    }
    const options = Array.from(this.el.querySelectorAll('je-select-option'));
    if (event.key == 'Enter' && open) {
      options.forEach(option => {
        if (this.hasFocus(option)) {
          this.value = option.value;
        }
      });
      this.popoverEl.open = false;
    } else if (event.key == 'Escape') {
      this.popoverEl.open = false;
    } else if ((event.key == 'ArrowDown' || event.key == 'ArrowUp') && !open) {
      (this.inputEl.shadowRoot.querySelector("[part='outer-container']") as HTMLElement).click();
    } else if ((event.key == 'ArrowDown' || event.key == 'ArrowUp') && open) {
      if (!options.some(t => this.hasFocus(t))) {
        const indexToFocus = options.findIndex(t => t.selected)
        if (indexToFocus > -1) {
          this.focusOption(options[indexToFocus]);
        } else {
          this.focusOption(options[0]);
        }
      } else {
        if (event.key == 'ArrowUp') {
          options.forEach(option => {
            if (this.hasFocus(option)) {
              const prevOption = option.previousElementSibling as HTMLJeSelectOptionElement;
              if (prevOption) {
                this.blurOption(option);
                this.focusOption(prevOption);
              }
            }
          });
        } else {
          const optionToFocus = options.find(t => this.hasFocus(t))?.nextElementSibling;
          if (optionToFocus) {
            this.blurOption(options.find(t => this.hasFocus(t)));
            this.focusOption(optionToFocus as HTMLJeSelectOptionElement);
          }
        }
      }
    } else if (event.key.length == 1) {
      const currentFocusedOption = options.find(t => this.hasFocus(t));
      const optionsWithKey = options.filter(t => t.textContent.toLowerCase().startsWith(event.key.toLowerCase()))
      if (optionsWithKey.length) {
        const currentFocuedIndex = optionsWithKey.findIndex(t => this.hasFocus(t));
        if (currentFocuedIndex > -1) {
          if (currentFocuedIndex < optionsWithKey.length - 1) {
            this.blurOption(optionsWithKey[currentFocuedIndex]);
            this.focusOption(optionsWithKey[currentFocuedIndex + 1]);
          } else {
            this.blurOption(optionsWithKey[currentFocuedIndex]);
            this.focusOption(optionsWithKey[0]);
          }
        } else {
          if (currentFocusedOption) this.blurOption(currentFocusedOption);
          this.focusOption(optionsWithKey[0]);
        }
        if (!open) {
          options.forEach(option => {
            if (this.hasFocus(option)) {
              this.value = option.value;
            }
          });
        }
      } else if (currentFocusedOption) {
        this.blurOption(currentFocusedOption);
      }
    }
  }

  render() {
    const open = this.popoverEl?.open;
    return (
      <Host>
        <je-popover placement='bottom-start' matchWidth={true} dismissOnClick={true} ref={el => this.popoverEl = el}>
          <je-input slot="trigger" ref={el => this.inputEl = el}
            exportparts='outer-container, start-container, end-container, native-input, content'
            label={this.label}
            placeholder={this.placeholder}
            noTyping={true}
            expand={this.expand}
            required={this.required}
          >
            <je-icon slot='end' icon='expand_more' class={{ open: open }} />
          </je-input>
          <slot onSlotchange={() => this.handleValueChange()} />
        </je-popover>
      </Host>
    );
  }
}
