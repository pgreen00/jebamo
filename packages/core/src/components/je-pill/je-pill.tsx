import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-pill',
  styleUrl: 'je-pill.scss',
  shadow: true,
})
export class JePill {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
