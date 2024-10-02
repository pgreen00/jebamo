import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-datepicker',
  styleUrl: 'je-datepicker.scss',
  shadow: true,
})
export class JeDatepicker {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
