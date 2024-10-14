import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-pill',
  styleUrl: 'je-pill.scss',
  shadow: true,
})
export class JePill {
  @Prop({ reflect: true }) outline = false;
  @Prop({ reflect: true }) button = true;
  @Prop({ reflect: true }) disabled = false;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
