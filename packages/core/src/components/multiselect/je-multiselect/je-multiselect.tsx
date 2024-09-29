import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-multiselect',
  styleUrl: 'je-multiselect.scss',
  shadow: true,
})
export class JeMultiselect {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
