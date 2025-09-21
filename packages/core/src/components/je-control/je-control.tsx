import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-control',
  styleUrl: 'je-control.scss',
  shadow: true,
})
export class JeControl {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
