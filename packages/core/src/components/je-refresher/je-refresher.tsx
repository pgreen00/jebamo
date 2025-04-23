import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-refresher',
  styleUrl: 'je-refresher.scss',
  shadow: true,
})
export class JeRefresher {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
