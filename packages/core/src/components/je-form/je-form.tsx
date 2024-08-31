import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-form',
  styleUrl: 'je-form.scss',
  shadow: true,
})
export class JeForm {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
