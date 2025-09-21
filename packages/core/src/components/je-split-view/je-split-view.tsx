import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-split-view',
  styleUrl: 'je-split-view.scss',
  shadow: true,
})
export class JeSplitView {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
