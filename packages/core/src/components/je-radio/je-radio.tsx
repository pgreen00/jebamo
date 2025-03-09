import { Component, Prop, h, Element, Listen } from '@stencil/core';

@Component({
  tag: 'je-radio',
  styleUrl: 'je-radio.scss',
  shadow: {
    delegatesFocus: true
  }
})
export class JeRadio {
  @Element() el!: HTMLElement;

  /** Disables option and shows state */
  @Prop() disabled = false;

  /**
   * The value of this option and the radio group will compare against
   */
  @Prop() value: any;

  /**
   * If the option is currently selected
   */
  @Prop() selected?: boolean;

  @Listen('click', { capture: true })
  handleClick(ev: Event) {
    if (this.disabled || this.selected === true) {
      ev.stopPropagation()
    }
  }

  render() {
    return (
      <label tabindex={0} class={{ disabled: this.disabled }} part='main'>
        <je-icon>{this.selected ? 'radio_button_checked' : 'radio_button_unchecked'}</je-icon>
        <slot />
      </label>
    );
  }
}
