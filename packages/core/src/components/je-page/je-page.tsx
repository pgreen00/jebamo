import { Component, Element, Host, Prop, h } from '@stencil/core';

export type PanelState = 'open' | 'closed' | 'minimized';
export type DrawerState = 'open' | 'closed';

@Component({
  tag: 'je-page',
  styleUrl: 'je-page.scss',
  shadow: true,
})
export class JePage {
  @Element() el!: HTMLElement;
  @Prop({ reflect: true }) leftPanel: PanelState = 'closed';
  @Prop({ reflect: true }) rightPanel: PanelState = 'closed';
  @Prop({ reflect: true }) leftDrawer: DrawerState = 'closed';
  @Prop({ reflect: true }) rightDrawer: DrawerState = 'closed';
  @Prop({ reflect: true }) bottomDrawer: DrawerState = 'closed';
  @Prop({ reflect: true }) theme: 'light' | 'dark' | 'auto' = 'light';

  render() {
    return (
      <Host>
        <div part='page-container'>
          <slot name='header' />
          <div part='body-container'>
            <slot name='left-panel' />
            <slot name='body' />
            <slot name='right-panel' />
          </div>
          <slot name='footer' />
        </div>
        <div part='overlay-container'>
          <slot name='overlay' />
          <slot name='left-drawer' />
          <slot name='bottom-drawer' />
          <slot name='right-drawer' />
        </div>
      </Host>
    );
  }
}
