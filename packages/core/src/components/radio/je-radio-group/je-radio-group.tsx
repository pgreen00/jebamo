import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-radio-group',
  styleUrl: 'je-radio-group.scss',
  shadow: true,
})
export class JeRadioGroup {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
