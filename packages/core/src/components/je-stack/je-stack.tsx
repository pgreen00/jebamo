import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-stack',
  styleUrl: 'je-stack.scss',
  shadow: true,
})
export class JeStack {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
