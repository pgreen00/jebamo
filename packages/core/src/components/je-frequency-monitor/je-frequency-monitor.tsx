import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-frequency-monitor',
  styleUrl: 'je-frequency-monitor.css',
  shadow: true,
})
export class JeFrequencyMonitor {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
