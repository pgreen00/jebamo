import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-column',
  styleUrl: 'je-column.scss',
  shadow: true,
})
export class JeColumn {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
