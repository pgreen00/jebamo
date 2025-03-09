import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-section',
  styleUrl: 'je-section.scss',
  shadow: true,
})
export class JeSection {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
