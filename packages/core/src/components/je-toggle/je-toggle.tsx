import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-toggle',
  styleUrl: 'je-toggle.scss',
  shadow: true,
})
export class JeToggle {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
