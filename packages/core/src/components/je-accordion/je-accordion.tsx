import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-accordion',
  styleUrl: 'je-accordion.scss',
  shadow: true,
})
export class JeAccordion {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
