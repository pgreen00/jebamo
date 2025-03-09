import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-icon-button',
  styleUrl: 'je-icon-button.scss',
  shadow: true,
})
export class JeIconButton {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
