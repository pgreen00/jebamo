import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-button',
  styleUrl: 'je-button.scss',
  shadow: true,
})
export class JeButton {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
