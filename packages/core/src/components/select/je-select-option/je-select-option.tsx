import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-select-option',
  styleUrl: 'je-select-option.scss',
  shadow: true,
})
export class JeSelectOption {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
