import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-link',
  styleUrl: 'je-link.scss',
  shadow: true,
})
export class JeLink {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
