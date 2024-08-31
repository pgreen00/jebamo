import { Component, Element, Host, Prop, h } from '@stencil/core';

export type PanelState = 'open' | 'closed' | 'minimized';

@Component({
  tag: 'je-page',
  styleUrl: 'je-page.scss',
  shadow: true,
})
export class JePage {
  @Element() el!: HTMLElement;
  @Prop() leftPanel: PanelState = 'closed';
  @Prop() rightPanel: PanelState = 'closed';

  render() {
    return (
      <Host>
        <slot name='header'/>
        <div part='body-container' class="body-container">
          <slot name='left-panel'/>
          <slot name='body'/>
          <slot name='right-panel'/>
        </div>
        <slot name='footer'/>
      </Host>
    );
  }
}
