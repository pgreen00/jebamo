import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-nav',
  styleUrl: 'je-nav.scss',
  shadow: true,
})
export class JeNav {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
