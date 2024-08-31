import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-icon',
  styleUrl: 'je-icon.scss',
  shadow: true,
})
export class JeIcon {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
