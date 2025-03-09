import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-button-group',
  styleUrl: 'je-button-group.scss',
  shadow: true,
})
export class JeButtonGroup {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
