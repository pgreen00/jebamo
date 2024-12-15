import { Component, Host, h, Prop, Listen, Element } from '@stencil/core';

/**
 * @slot - Place the label in the default slot
 * @part icon - The je-icon element
 */
@Component({
  tag: 'je-checkbox-option',
  styleUrl: 'je-checkbox-option.scss',
  shadow: {
    delegatesFocus: true
  },
})
export class JeCheckboxOption {
  @Element() element!: HTMLJeCheckboxOptionElement;

  /**
   * Value of this option that the checkbox group will compare against
   */
  @Prop() value: any;

  /**
   * Whether or not this option is currently checked
   */
  @Prop() checked = false;

  /**
   * Shows readonly state and prevents changes to this option
   */
  @Prop({ reflect: true }) readonly = false;

  /**
   * Shows disabled state and prevents changes to this option
   */
  @Prop({ reflect: true }) disabled = false;

  @Listen('click', { capture: true })
  onClick(ev: MouseEvent) {
    if (this.readonly || this.disabled) {
      ev.stopPropagation();
    }
  }

  private isOption(element: Element): element is HTMLJeCheckboxOptionElement {
    return element.tagName === 'JE-CHECKBOX-OPTION';
  }

  private optionIsValid(option: HTMLJeCheckboxOptionElement) {
    return !option.readonly && !option.disabled;
  }

  @Listen('keydown')
  onKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'ArrowUp') {
      ev.stopImmediatePropagation();
      ev.preventDefault();
      let previousSibling = this.element.previousElementSibling;
      while (previousSibling && (!this.isOption(previousSibling) || !this.optionIsValid(previousSibling))) {
        previousSibling = previousSibling.previousElementSibling;
      }
      if (previousSibling) {
        this.element.blur();
        (previousSibling as HTMLJeCheckboxOptionElement).focus();
      }
    } else if (ev.key === 'ArrowDown') {
      ev.stopImmediatePropagation();
      ev.preventDefault();
      let nextSibling = this.element.nextElementSibling;
      while (nextSibling && (!this.isOption(nextSibling) || !this.optionIsValid(nextSibling))) {
        nextSibling = nextSibling.nextElementSibling;
      }
      if (nextSibling) {
        this.element.blur();
        (nextSibling as HTMLJeCheckboxElement).focus();
      }
    } else if (ev.key === ' ' || ev.key === 'Enter') {
      ev.stopImmediatePropagation();
      ev.preventDefault();
      this.element.click();
    }
  }

  render() {
    return (
      <Host>
        <je-icon tabindex={0} part='icon' icon={this.checked ? 'check_box' : 'check_box_outline_blank'} />
        <slot></slot>
      </Host>
    );
  }
}
