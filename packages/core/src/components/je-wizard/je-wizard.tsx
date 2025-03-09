import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-wizard',
  styleUrl: 'je-wizard.scss',
  shadow: true,
})
export class JeWizard {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
