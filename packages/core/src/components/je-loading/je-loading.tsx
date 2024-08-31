import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-loading',
  styleUrl: 'je-loading.scss',
  shadow: true,
})
export class JeLoading {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
