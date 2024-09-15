import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-skeleton-text',
  styleUrl: 'je-skeleton-text.scss',
  shadow: true,
})
export class JeSkeletonText {
  /**
   * Whether or not the component should have the animated "shimmer" effect
   */
  @Prop() animated = true;

  render() {
    return (
      <Host class={{'animated': this.animated}}>
        <slot></slot>
      </Host>
    );
  }
}
