import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-option',
  styleUrl: 'je-option.scss',
  shadow: true,
})
export class JeOption {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
