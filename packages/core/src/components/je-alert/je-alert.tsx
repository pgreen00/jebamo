import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-alert',
  styleUrl: 'je-alert.scss',
  shadow: true,
})
export class JeAlert {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
