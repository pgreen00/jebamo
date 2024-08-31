import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-infinite',
  styleUrl: 'je-infinite.scss',
  shadow: true,
})
export class JeInfinite {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
