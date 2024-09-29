import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-files',
  styleUrl: 'je-files.scss',
  shadow: true,
})
export class JeFiles {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
