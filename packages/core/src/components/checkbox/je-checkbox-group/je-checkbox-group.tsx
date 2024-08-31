import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-checkbox-group',
  styleUrl: 'je-checkbox-group.scss',
  shadow: true,
})
export class JeCheckboxGroup {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
