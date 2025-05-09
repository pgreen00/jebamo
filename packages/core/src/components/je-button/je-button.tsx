import { Component, Prop, h, Element, Listen, Host, Watch } from '@stencil/core';
import { Color } from '../../utils/utils';

@Component({
  tag: 'je-button',
  styleUrl: 'je-button.scss',
  shadow: {
    delegatesFocus: true
  },
})
export class JeButton {
  @Element() el: HTMLJeButtonElement;
  private formButtonEl?: HTMLButtonElement;
  private buttonEl: HTMLButtonElement;

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
      console.log(formEl);
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
      this.buttonEl.style.setProperty('--pending-width', `${this.buttonEl.clientWidth}px`);
    }
  }

  render() {
    const classes = {
      [this.fill]: true,
      expand: this.expand,
      pending: this.pending,
      [this.color]: !!this.color
    }
    return (
      <Host>
        <button part='inner-button' ref={el => this.buttonEl = el} disabled={this.disabled || this.pending} type='button' tabindex={0} class={classes}>
          {this.pending ? <je-loading/> : <slot/>}
          <slot name='badge'/>
        </button>
      </Host>
    );
  }
}
