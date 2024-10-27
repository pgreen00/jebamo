import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-menu-option',
  styleUrl: 'je-menu-option.scss',
  shadow: true,
})
export class JeMenuOption {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
