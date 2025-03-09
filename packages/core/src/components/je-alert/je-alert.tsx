import { Component, Listen, Prop, h, Element, Host, State, Event, EventEmitter, Method } from '@stencil/core';
import { Color, OverlayData } from '../../utils/utils';

@Component({
  tag: 'je-alert',
  styleUrl: 'je-alert.scss',
  shadow: true,
})
export class JeAlert {
  @Element() el!: HTMLJeAlertElement;
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
  @Event() alertPresent: EventEmitter;
  @Event() alertDismiss: EventEmitter<OverlayData>;
  @State() paused = true;
  private role?: string;
  private data?: any;

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
      this.el.addEventListener('alertDismiss', e => resolve(e.detail), { once: true });
    });
  }

  @Listen('animationend')
  onAnimationEnd(e: AnimationEvent) {
    if (e.animationName == 'fadeOut' && e.target == this.el) {
      this.el.classList.remove('visible');
      this.paused = true;
      this.alertDismiss.emit({
        role: this.role ?? 'manualDismiss',
        data: this.data
      });
      this.role = undefined;
      this.data = undefined;
    }
    if (e.animationName == 'fadeIn' && e.target == this.el) {
      this.paused = false;
      this.alertPresent.emit();
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
            {this.icon && <je-icon slot="start" class={this.color}>{this.icon}</je-icon>}
            {this.header && <span part="header">{this.header}</span>}
            {this.closable && (
              <je-icon slot='end' onClick={() => (this.dismiss('userDismiss'))} button>close</je-icon>
            )}
          </je-toolbar>
          <je-toolbar class="card-body">
            {this.icon && <je-icon slot="start" style={{ opacity: '0' }}>{this.icon}</je-icon>}
            <slot name="content">{this.message && <span part="message">{this.message}</span>}</slot>
          </je-toolbar>
          <je-toolbar>
            <slot slot="start" name="start"></slot>
            <slot slot="end" name="end"></slot>
          </je-toolbar>
          {this.duration > 0 && (progressBar)}
        </Host>
      );
    } else {
      return (
        <Host class={{ open: this.open, [this.position]: this.fixed }}>
          <div class="border"></div>
          <je-toolbar class="bar">
            <slot slot="start" name="start">
              {this.icon && <je-icon class={this.color}>{this.icon}</je-icon>}
            </slot>
            <slot name="content">
              <div>
                {this.header && <span part="header">{this.header}</span>}
                {this.message && <span part="message">{this.message}</span>}
              </div>
            </slot>
            <slot slot="end" name="end">
              {this.closable && (
                <je-icon onClick={() => (this.dismiss('userDismiss'))} button>close</je-icon>
              )}
            </slot>
          </je-toolbar>
          {this.duration > 0 && (progressBar)}
        </Host>
      );
    }
  }
}
