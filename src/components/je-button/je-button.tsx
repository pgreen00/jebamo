import { Component, Prop, h, Element, Listen, Host, Watch, forceUpdate } from '@stencil/core';
import { Color } from '../../utils/color';

@Component({
  tag: 'je-button',
  styleUrl: 'je-button.css',
  shadow: true
})
export class JeButton {
  @Element() el: HTMLJeButtonElement;
  private formButtonEl?: HTMLButtonElement;

  /** Disables button */
  @Prop() disabled = false;

  /** Can set to submit or reset to participate in forms */
  @Prop() type?: 'submit' | 'reset';

  /**
   * Can set form id to participate in forms. Use this if you need to place
   * submit/reset button outside the form element
   */
  @Prop() form?: string;

  /** Expands the button to the full width of it's container */
  @Prop() expand = false;

  /** Shows a loading spinner and disables the button */
  @Prop() pending = false;

  /** Button fill */
  @Prop({ reflect: true }) fill: 'solid' | 'outline' | 'clear' = 'solid';

  /** Button size */
  @Prop({ reflect: true }) size: 'md' | 'lg' | 'sm' = 'md';

  /** Predefined colors */
  @Prop({ reflect: true }) color?: Color;

  componentDidLoad() {
    if (this.type) {
      const formEl = this.form ? document.getElementById(this.form) : this.el.closest('form');
      if (formEl) {
        this.formButtonEl = document.createElement('button');
        this.formButtonEl.type = this.type;
        this.formButtonEl.style.display = 'none';
        formEl.append(this.formButtonEl);
      }
    }
  }

  @Listen('click')
  handleClick() {
    this.formButtonEl?.click();
  }

  @Watch('pending')
  onPendingChange() {
    if (this.pending) {
      this.el.style.setProperty('--pending-width', `${this.el.clientWidth}px`);
    }
  }

  @Listen('keydown')
  onKeyDown(ev: KeyboardEvent) {
    if (!this.disabled && !this.pending && (ev.key === 'Enter' || ev.key == ' ')) {
      ev.preventDefault()
      this.el.click()
    }
  }

  render() {
    return (
      <Host role='button' aria-disabled={`${this.disabled || this.pending}`} tabindex={this.disabled || this.pending ? '-1' : '0'}>
        {this.pending ? <je-loading /> : <slot onSlotchange={() => forceUpdate(this.el)} />}
        <slot name='badge' />
      </Host>
    );
  }
}
