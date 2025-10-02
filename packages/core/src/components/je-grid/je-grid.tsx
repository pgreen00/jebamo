import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-grid',
  styleUrl: 'je-grid.scss',
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
