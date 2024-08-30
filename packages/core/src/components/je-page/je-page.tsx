import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-page',
  styleUrl: 'je-page.css',
  shadow: true,
})
export class JePage {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
