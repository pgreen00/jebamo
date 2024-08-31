import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-card',
  styleUrl: 'je-card.scss',
  shadow: true,
})
export class JeCard {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
