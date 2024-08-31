import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-tabs',
  styleUrl: 'je-tabs.scss',
  shadow: true,
})
export class JeTabs {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
