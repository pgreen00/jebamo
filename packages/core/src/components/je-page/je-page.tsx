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
  @Prop({ reflect: true }) footer: 'sticky' | 'fixed' = 'fixed';
  @Event() themeChange: EventEmitter<'light' | 'dark'>;
  private toastContainer!: HTMLElement;

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
    if (this.footer === 'sticky') {
      return (
        <Host>
          <slot name='header' />
          <div part='body-container'>
            <slot name='left-panel' />
            <div part='sticky-container'>
              <slot name='body' />
              <slot name='footer' />
            </div>
            <slot name='right-panel' />
          </div>
        </Host>
      );
    } else {
      return (
        <Host>
          <slot name='header' />
          <div part='body-container'>
            <slot name='left-panel' />
            <slot name='body' />
            <slot name='right-panel' />
          </div>
          <slot name='footer' />
          <div ref={el => this.toastContainer = el} part='toast-container'>
            <slot name='top-start' />
            <slot name='top-end' />
            <slot name='bottom-start' />
            <slot name='bottom-end' />
          </div>
        </Host>
      );
    }
  }
}
