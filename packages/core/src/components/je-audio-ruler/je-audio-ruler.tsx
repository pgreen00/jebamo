import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-audio-ruler',
  styleUrl: 'je-audio-ruler.css',
  shadow: true,
})
export class JeAudioRuler {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
