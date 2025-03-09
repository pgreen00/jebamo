import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-select',
  styleUrl: 'je-select.scss',
  shadow: true,
})
export class JeSelect {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
