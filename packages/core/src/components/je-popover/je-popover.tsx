import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-popover',
  styleUrl: 'je-popover.scss',
  shadow: true,
})
export class JePopover {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
