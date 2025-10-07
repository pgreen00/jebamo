import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-grid',
  styleUrl: 'je-grid.css',
  shadow: true,
})
export class JeGrid {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
