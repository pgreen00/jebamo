import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-item',
  styleUrl: 'je-item.scss',
  shadow: true,
})
export class JeItem {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
