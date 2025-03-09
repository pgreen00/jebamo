import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-textfield',
  styleUrl: 'je-textfield.scss',
  shadow: true,
})
export class JeTextfield {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
