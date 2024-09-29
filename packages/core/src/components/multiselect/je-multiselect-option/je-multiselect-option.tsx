import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-multiselect-option',
  styleUrl: 'je-multiselect-option.scss',
  shadow: true,
})
export class JeMultiselectOption {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
