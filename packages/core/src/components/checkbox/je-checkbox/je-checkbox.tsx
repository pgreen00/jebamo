import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-checkbox',
  styleUrl: 'je-checkbox.scss',
  shadow: true,
})
export class JeCheckbox {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
