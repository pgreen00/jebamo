import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-toolbar',
  styleUrl: 'je-toolbar.scss',
  shadow: true,
})
export class JeToolbar {
  render() {
    return (
      <Host>
        <slot name='start'/>
        <div class='center-container'><slot/></div>
        <slot name='end'/>
      </Host>
    );
  }
}
