import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-radio',
  styleUrl: 'je-radio.scss',
  shadow: true,
})
export class JeRadio {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
