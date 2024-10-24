import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-color',
  styleUrl: 'je-color.scss',
  shadow: true,
})
export class JeColor {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
