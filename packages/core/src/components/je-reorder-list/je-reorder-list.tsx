import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-reorder-list',
  styleUrl: 'je-reorder-list.scss',
  shadow: true,
})
export class JeReorderList {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
