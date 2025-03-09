import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-breadcrumbs',
  styleUrl: 'je-breadcrumbs.scss',
  shadow: true,
})
export class JeBreadcrumbs {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
