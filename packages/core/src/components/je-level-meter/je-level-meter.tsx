import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-level-meter',
  styleUrl: 'je-level-meter.css',
  shadow: true,
})
export class JeLevelMeter {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
