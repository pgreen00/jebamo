import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-tooltip',
  styleUrl: 'je-tooltip.scss',
  shadow: true,
})
export class JeTooltip {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
