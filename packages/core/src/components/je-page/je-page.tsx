import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-page',
  styleUrl: 'je-page.css'
})
export class JePage {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
