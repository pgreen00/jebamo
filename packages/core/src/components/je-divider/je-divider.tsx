import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-divider',
  styleUrl: 'je-divider.scss',
  shadow: true,
})
export class JeDivider {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
