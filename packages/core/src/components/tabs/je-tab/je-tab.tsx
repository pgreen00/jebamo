import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-tab',
  styleUrl: 'je-tab.scss',
  shadow: true,
})
export class JeTab {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
