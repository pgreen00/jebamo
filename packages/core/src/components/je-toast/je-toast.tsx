import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-toast',
  styleUrl: 'je-toast.scss',
  shadow: true,
})
export class JeToast {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
