import { Component, Listen, Prop, h, Element, Host, State, Event, EventEmitter, Method, forceUpdate, Fragment } from '@stencil/core';
import { Color } from '../../utils/color';

@Component({
  tag: 'je-alert',
  styleUrl: 'je-alert.scss',
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
  @Prop({ reflect: true }) color: Color = 'primary';
  @Prop() duration = 0;
  @Prop() progress = false;
  @Prop({ mutable: true }) open = false;
  @Event() present: EventEmitter;
  @Event() dismiss: EventEmitter;

  componentWillRender() {
    if (this.open) {
      this.el.classList.add('visible');
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

  @Listen('animationend')
  onAnimationEnd(e: AnimationEvent) {
    if (e.animationName == 'fadeOut' && e.target == this.el) {
      this.el.classList.remove('visible');
      this.paused = true;
      this.dismiss.emit({
        role: this.role ?? 'manualDismiss',
        data: this.data
      });
      this.role = undefined;
      this.data = undefined;
    }
    if (e.animationName == 'fadeIn' && e.target == this.el) {
      this.paused = false;
      this.present.emit();
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

  @Listen('slotchange')
  onSlotChange() {
    forceUpdate(this.el)
  }

  render() {
    const hasHeader = !!this.header || !!this.el.querySelector('[slot="header"]')
    const hasMessage = !!this.message || !!this.el.querySelector('[slot="message"]')
    const hasButtons = !!this.el.querySelector('[slot="buttons"]')
    return (
      <Host class={{ open: this.open }}>
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
            class={{ progress: true, running: this.open && !this.paused, visible: this.progress }}
            style={{ animationDuration: `${this.duration}ms` }}
          ></div>
        )}
      </Host>
    )
  }
}
