import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';

export type PanelState = 'open' | 'closed' | 'minimized';

@Component({
  tag: 'je-page',
  styleUrl: 'je-page.scss',
  shadow: true
})
export class JePage {
  @Element() el!: HTMLElement;
  @Prop({ reflect: true }) leftPanel: PanelState = 'closed';
  @Prop({ reflect: true }) rightPanel: PanelState = 'closed';
  @Prop({ reflect: true }) theme: 'light' | 'dark' | 'auto' = 'light';
  @Event() themeChange: EventEmitter<'light' | 'dark'>;

  componentDidLoad() {
    this.themeChangeHandler(this.theme);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => this.themeChangeHandler(this.theme));
  }

  @Watch('theme')
  themeChangeHandler(newValue: 'light' | 'dark' | 'auto') {
    if (newValue !== 'auto')
      this.themeChange.emit(newValue);
    else
      this.themeChange.emit(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

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
        </div>
      </Host>
    );
  }
}
