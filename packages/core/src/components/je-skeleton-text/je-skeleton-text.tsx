import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-skeleton-text',
  styleUrl: 'je-skeleton-text.scss',
  shadow: true,
})
export class JeSkeletonText {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
