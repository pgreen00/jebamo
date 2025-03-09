import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-breadcrumb',
  styleUrl: 'je-breadcrumb.scss',
  shadow: true,
})
export class JeBreadcrumb {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
