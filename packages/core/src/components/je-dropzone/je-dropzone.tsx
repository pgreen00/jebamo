import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-dropzone',
  styleUrl: 'je-dropzone.scss',
  shadow: true,
})
export class JeDropzone {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
