import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-tree',
  styleUrl: 'je-tree.scss',
  shadow: true,
})
export class JeTree {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
