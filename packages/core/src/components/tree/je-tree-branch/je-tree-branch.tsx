import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-tree-branch',
  styleUrl: 'je-tree-branch.scss',
  shadow: true,
})
export class JeTreeBranch {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
