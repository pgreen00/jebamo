import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-waveform',
  styleUrl: 'je-waveform.css',
  shadow: true,
})
export class JeWaveform {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
