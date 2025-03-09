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
        <div part='main-container'>
          <slot name='start'/>
          <slot/>
        </div>
        <div part='end-container'>
          <slot name='end'/>
        </div>
      </Host>
    );
  }
}
