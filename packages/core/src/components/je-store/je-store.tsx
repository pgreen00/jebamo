import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-store',
  styleUrl: 'je-store.scss',
  shadow: true,
})
export class JeStore {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
