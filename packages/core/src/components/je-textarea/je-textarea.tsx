import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-textarea',
  styleUrl: 'je-textarea.scss',
  shadow: true,
})
export class JeTextarea {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
