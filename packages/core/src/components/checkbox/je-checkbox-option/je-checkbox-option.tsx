import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-checkbox-option',
  styleUrl: 'je-checkbox-option.scss',
  shadow: true,
})
export class JeCheckboxOption {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
