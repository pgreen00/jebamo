import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-column-group',
  styleUrl: 'je-column-group.scss',
  shadow: true,
})
export class JeColumnGroup {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
