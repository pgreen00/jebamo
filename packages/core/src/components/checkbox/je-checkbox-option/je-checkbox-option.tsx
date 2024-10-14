import { Component, Host, h, Element, Event, EventEmitter, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'je-checkbox-option',
  styleUrl: 'je-checkbox-option.scss',
  shadow: true,
})
export class JeCheckboxOption {
  @Element() el!: HTMLElement;

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
  @Prop() readonly = false;

  /**
   * Shows disabled state and prevents changes to this option
   */
  @Prop() disabled = false;

  /**
   * Emits the value whenever it is checked
   */
  @Event() check: EventEmitter<any>;

  /**
   * Emits the value whenever it is unchecked
   */
  @Event() uncheck: EventEmitter<any>;

  @Listen('click')
  onClick() {
    if (!this.readonly && !this.disabled) {
      if (this.checked) {
        this.uncheck.emit(this.value);
      } else {
        this.check.emit(this.value);
      }
    }
  }

  render() {
    return (
      <Host>
        <je-icon icon={this.checked ? 'check_box' : 'check_box_outline_blank'} />
        <slot></slot>
      </Host>
    );
  }
}
