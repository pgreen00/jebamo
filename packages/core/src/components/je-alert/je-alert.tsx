import { Component, Listen, Prop, h, Element, Host, State, Event, EventEmitter, Method, Fragment, Watch } from '@stencil/core';
import { Color } from '../../utils/color';

@Component({
  tag: 'je-alert',
  styleUrl: 'je-alert.css',
  shadow: true,
})
export class JeAlert {
  private role?: string;
  private data?: any;
  @State() paused = true;
  @Element() el!: HTMLJeAlertElement;
  @Prop() icon?: string;
  @Prop() header?: string;
  @Prop() message?: string;
  @Prop() closable = false;
  @Prop({ reflect: true }) color?: Color;
  @Prop() duration = 0;
  @Prop({ mutable: true, reflect: true }) open = false;
  @Event() present: EventEmitter;
  @Event() dismiss: EventEmitter;

  @Watch('open')
  onOpenChange(open: boolean) {
    if (open) {
      const animation = this.el.animate({
        opacity: [0, 1],
        transform: ['scale(0%)', 'scale(100%)'],
        display: ['none', 'grid']
      }, 600)
      animation.onfinish = () => {
        this.paused = false;
        this.present.emit();
      }
    } else {
      const animation = this.el.animate({
        opacity: [1, 0],
        transform: ['scale(100%)', 'scale(0%)'],
        display: ['none', 'grid']
      }, 600)
      animation.onfinish = () => {
        this.paused = true;
        this.dismiss.emit({
          role: this.role ?? 'manualDismiss',
          data: this.data
        });
        this.role = undefined;
        this.data = undefined;
      }
    }
  }

  @Method()
  async show() {
    this.open = true;
  }

  @Method()
  async hide(role?: string, data?: any) {
    this.role = role;
    this.data = data;
    this.open = false;
  }

  @Method()
  didDismiss() {
    return new Promise(resolve => {
      this.el.addEventListener('dismiss', e => resolve(e.detail), { once: true });
    });
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
    const hasHeader = !!this.header || !!this.el.querySelector('[slot="header"]')
    const hasMessage = !!this.message || !!this.el.querySelector('[slot="message"]')
    const hasButtons = !!this.el.querySelector('[slot="buttons"]')
    return (
      <Host>
        <div class="border"></div>

        <div class="cell top-left">
          {this.icon && <je-icon fill>{this.icon}</je-icon>}
          <slot name="start" />
        </div>
        <div class="cell top-middle">
          {hasHeader ? (
            <slot name='header'>{this.header && <span part="header">{this.header}</span>}</slot>
          ) : (
            <slot name="message">{this.message && <span part="message">{this.message}</span>}</slot>
          )}
        </div>
        <div class="cell top-right">
          <slot name="end" />
          {this.closable && <je-button onClick={() => this.hide('userDismiss')}><je-icon>close</je-icon></je-button>}
        </div>

        {hasHeader && hasMessage && (
          <Fragment>
            <div class="cell middle-left"></div>
            <div class="cell middle-middle">
              <slot name="message">{this.message && <span part="message">{this.message}</span>}</slot>
            </div>
            <div class="cell middle-right"></div>
          </Fragment>
        )}

        {hasButtons && (
          <Fragment>
            <div class="cell bottom-left"></div>
            <div class="cell bottom-middle">
              <slot name="buttons"></slot>
            </div>
            <div class="cell bottom-right"></div>
          </Fragment>
        )}

        {this.duration > 0 && (
          <div
            onAnimationEnd={() => this.hide('autoDismiss')}
            class={{ progress: true, running: this.open && !this.paused }}
            style={{ animationDuration: `${this.duration}ms` }}
          ></div>
        )}
      </Host>
    )
  }
}
