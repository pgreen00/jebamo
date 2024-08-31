import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-modal',
  styleUrl: 'je-modal.scss',
  shadow: true,
})
export class JeModal {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
