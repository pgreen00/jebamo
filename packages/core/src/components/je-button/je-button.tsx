import { Component, Prop, h, Element, Listen } from '@stencil/core';

@Component({
  tag: 'je-button',
  styleUrl: 'je-button.scss',
  shadow: true,
})
export class JeButton {
  @Element() el: HTMLJeButtonElement;
  private formEl?: HTMLFormElement;
  private formButtonEl?: HTMLButtonElement;

  /** Disables button */
  @Prop() disabled = false;

  /** Can set to submit or reset to participate in forms */
  @Prop() type = 'button';

  /** Expands the button to the full width of it's container */
  @Prop({ reflect: true }) expand = false;

  /** Button fill */
  @Prop({ reflect: true }) fill: 'solid' | 'outline' | 'clear' = 'solid';

  /** Button size */
  @Prop({ reflect: true }) size: 'md' | 'lg' | 'sm' = 'md';

  /** Predefined colors */
  @Prop({ reflect: true }) color: 'primary' | 'secondary' | 'tertiary' | 'success' | 'error' | 'warning' = 'primary';

  componentDidLoad() {
    if (this.type == 'submit' || this.type == 'reset') {
      this.formEl = this.el.closest('form');
      if (this.formEl) {
        this.formButtonEl = document.createElement('button');
        this.formButtonEl.type = this.type;
        this.formButtonEl.style.display = 'none';
        this.formEl.append(this.formButtonEl);
      }
    }
  }

  @Listen('click')
  handleClick() {
    if (this.formButtonEl) {
      this.formButtonEl.click();
    }
  }

  render() {
    return (
      <button part='inner-button' disabled={this.disabled} type={this.type}>
        <slot></slot>
      </button>
    );
  }
}
