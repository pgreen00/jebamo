import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-input',
  styleUrl: 'je-input.scss',
  shadow: true,
})
export class JeInput {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
