import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-radio-button',
  styleUrl: 'je-radio-button.scss',
  shadow: true,
})
export class JeRadioButton {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
