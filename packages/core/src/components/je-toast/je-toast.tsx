import { Component, Listen, Prop, h, Element, Host, State, Event, EventEmitter, Method } from '@stencil/core';
import { Color, OverlayData } from '../../utils/utils';

@Component({
  tag: 'je-toast',
  styleUrl: 'je-toast.scss',
  shadow: true,
})
export class JeToast {
  @Element() el!: HTMLJeToastElement;
  @Prop() icon?: string;
  @Prop() header?: string;
  @Prop() message?: string;
  @Prop() closable = false;
  @Prop() color: Color = 'primary';
  @Prop() duration = 0;
  @Prop() progress = false;
  @Prop({ reflect: true }) type: 'bar' | 'card' = 'bar';
  @Prop({ mutable: true }) open = false;
  @Prop({ reflect: true }) fixed = false;
  @Prop() position: 'top' | 'bottom' | 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' = 'bottom-start';
  @Event() toastPresent: EventEmitter;
  @Event() toastDismiss: EventEmitter<OverlayData>;
  @State() paused = true;
  private role?: string;
  private data?: any;

  componentDidLoad() {
    this.el.closest('je-page')?.getCurrentTheme()
      .then(t => this.el.toggleAttribute('darkmode', t === 'dark'))
  }

  componentWillRender() {
    if (this.open) {
      this.el.classList.add('visible');
    }
  }

  @Method()
  async present() {
    this.open = true;
  }

  @Method()
  async dismiss(role?: string, data?: any) {
    this.role = role;
    this.data = data;
    this.open = false;
  }

  @Method()
  didDismiss() {
    return new Promise<OverlayData>(resolve => {
      this.el.addEventListener('toastDismiss', e => resolve(e.detail), { once: true });
    });
  }

  @Listen('themeChange', { target: 'window' })
  handleThemeChange(e: CustomEvent<'light' | 'dark'>) {
    this.el.toggleAttribute('darkmode', e.detail == 'dark');
  }

  @Listen('animationend')
  onAnimationEnd(e: AnimationEvent) {
    if (e.animationName == 'fadeOut' && e.target == this.el) {
      this.el.classList.remove('visible');
      this.paused = true;
      this.toastDismiss.emit({
        role: this.role ?? 'manualDismiss',
        data: this.data
      });
      this.role = undefined;
      this.data = undefined;
    }
    if (e.animationName == 'fadeIn' && e.target == this.el) {
      this.paused = false;
      this.toastPresent.emit();
    }
  }

  @Listen('mouseenter')
  onMouseEnter() {
    if (this.open)
      this.paused = true;
  }

  @Listen('mouseleave')
  onMouseLeave() {
    if (this.open)
      this.paused = false;
  }

  render() {
    const progressBar = <div
      onAnimationEnd={() => (this.dismiss('autoDismiss'))}
      class={{ progress: true, running: this.open && !this.paused, visible: this.progress }}
      style={{ animationDuration: `${this.duration}ms` }}></div>
    if (this.type == 'card') {
      return (
        <Host class={{ open: this.open, [this.position]: this.fixed }}>
          <div class="border"></div>
          <je-toolbar>
            {this.icon && <je-icon slot="start" class={this.color} icon={this.icon} />}
            {this.header && <span part="header">{this.header}</span>}
            {this.closable && (
              <je-button onClick={() => (this.dismiss('userDismiss'))} slot="end" fill="clear" iconOnly={true} color="auto">
                <je-icon icon="close" />
              </je-button>
            )}
          </je-toolbar>
          <je-toolbar class="card-body">
            {this.icon && <je-icon slot="start" style={{ opacity: '0' }} icon={this.icon} />}
            <slot name="content">{this.message && <span part="message">{this.message}</span>}</slot>
          </je-toolbar>
          <je-toolbar>
            <slot slot="start" name="start"></slot>
            <slot slot="end" name="end"></slot>
          </je-toolbar>
          {this.duration && (progressBar)}
        </Host>
      );
    } else {
      return (
        <Host class={{ open: this.open, [this.position]: this.fixed }}>
          <div class="border"></div>
          <je-toolbar class="bar">
            <slot slot="start" name="start">
              {this.icon && <je-icon class={this.color} icon={this.icon} />}
            </slot>
            <slot name="content">
              <div>
                {this.header && <span part="header">{this.header}</span>}
                {this.message && <span part="message">{this.message}</span>}
              </div>
            </slot>
            <slot slot="end" name="end">
              {this.closable && (
                <je-button onClick={() => (this.dismiss('userDismiss'))} fill="clear" iconOnly={true} color="auto">
                  <je-icon icon="close" />
                </je-button>
              )}
            </slot>
          </je-toolbar>
          {this.duration && (progressBar)}
        </Host>
      );
    }
  }
}
