import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-menu',
  styleUrl: 'je-menu.css',
  shadow: true,
})
export class JeMenu {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
