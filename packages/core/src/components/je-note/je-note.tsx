import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-note',
  styleUrl: 'je-note.scss',
  shadow: true,
})
export class JeNote {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
