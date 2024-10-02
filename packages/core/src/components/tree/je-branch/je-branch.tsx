import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-branch',
  styleUrl: 'je-branch.scss',
  shadow: true,
})
export class JeBranch {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
