import { Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import { Color } from '../../utils/utils';

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
  @Prop() sticky = false;
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

  @Method()
  async getCurrentTheme() {
    if (this.theme !== 'auto')
      return this.theme;
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  @Method()
  async presentToast(options: {
    header?: string;
    message?: string;
    icon?: string;
    closable?: boolean;
    duration?: number;
    progress?: boolean;
    type?: 'card' | 'bar';
    position?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    buttons?: {
      text: string;
      side?: 'start' | 'end';
      fill?: 'solid' | 'outline' | 'clear';
      color?: Color | 'auto';
      size?: 'sm' | 'md' | 'lg';
      handler: (toast: HTMLJeToastElement) => void | Promise<void>;
    }[];
  }) {
    const toast = document.createElement('je-toast');
    toast.header = options.header;
    toast.message = options.message;
    toast.icon = options.icon;
    toast.closable = options.closable;
    toast.duration = options.duration;
    toast.progress = options.progress;
    toast.type = options.type;
    toast.slot = options.position;
    if (options.buttons) {
      options.buttons.forEach(button => {
        const buttonEl = document.createElement('je-button');
        buttonEl.innerText = button.text;
        buttonEl.slot = button.side ?? 'end';
        buttonEl.fill = button.fill;
        buttonEl.color = button.color;
        buttonEl.size = button.size;
        if (button.handler)
          buttonEl.onclick = () => button.handler(toast);
        toast.appendChild(buttonEl);
      });
    }
    this.el.appendChild(toast);
    toast.open = true;
    return toast;
  }

  render() {
    return (
      <Host class={{ sticky: this.sticky }}>
        <slot name='header' />
        <div part='body-container'>
          <slot name='left-panel' />
          <slot name='body' />
          <slot name='right-panel' />
        </div>
        <slot name='footer' />
        <div class="toast-container top-start">
          <slot name='top-start' />
        </div>
        <div class="toast-container top-end">
          <slot name='top-end' />
        </div>
        <div class="toast-container bottom-start">
          <slot name='bottom-start' />
        </div>
        <div class="toast-container bottom-end">
          <slot name='bottom-end' />
        </div>
      </Host>
    )
  }
}
