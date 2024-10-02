import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-placeholder',
  styleUrl: 'je-placeholder.scss',
  shadow: true,
})
export class JePlaceholder {
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
