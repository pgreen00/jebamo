import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-toast-container',
  styleUrl: 'je-toast-container.scss',
  shadow: true,
})
export class JeToastContainer {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
