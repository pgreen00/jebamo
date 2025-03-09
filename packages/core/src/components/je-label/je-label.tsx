import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-label',
  styleUrl: 'je-label.scss',
  shadow: true,
})
export class JeLabel {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
