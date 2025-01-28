import { Component, Prop, h, Element, Listen } from '@stencil/core';
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

  /** Disables button */
  @Prop() disabled = false;

  /** Can set to submit or reset to participate in forms */
  @Prop() type = 'button';

  /** Expands the button to the full width of it's container */
  @Prop({ reflect: true }) expand = false;

  /** Removes the padding, ideal for turning an icon or image into a button */
  @Prop({ reflect: true }) iconOnly = false;

  /** Button fill */
  @Prop({ reflect: true }) fill: 'solid' | 'outline' | 'clear' = 'solid';

  /** Button size */
  @Prop({ reflect: true }) size: 'md' | 'lg' | 'sm' = 'md';

  /** Predefined colors. Auto will switch between light and dark based on the closest je-page's theme. */
  @Prop({ reflect: true }) color: Color | 'auto' = 'primary';

  /** Overrides what the light mode color will be when color is "auto". */
  @Prop() lightModeColor: Color = 'dark';

  /** Overrides what the dark mode color will be when color is "auto". */
  @Prop() darkModeColor: Color = 'light';

  componentDidLoad() {
    if (this.type == 'submit' || this.type == 'reset') {
      const formEl = this.el.closest('form');
      if (formEl) {
        this.formButtonEl = document.createElement('button');
        this.formButtonEl.type = this.type;
        this.formButtonEl.style.display = 'none';
        formEl.append(this.formButtonEl);
      }
    }
    if (this.color == 'auto') {
      this.el.closest('je-page')?.getCurrentTheme()
        .then(t => {
          this.el.toggleAttribute(this.lightModeColor, t == 'light')
          this.el.toggleAttribute(this.darkModeColor, t == 'dark')
        })
    }
  }

  @Listen('themeChange', { target: 'body' })
  handleThemeChange(e: CustomEvent<'light' | 'dark'>) {
    if (this.color == 'auto') {
      this.el.toggleAttribute(this.lightModeColor, e.detail == 'light')
      this.el.toggleAttribute(this.darkModeColor, e.detail == 'dark')
    }
  }

  @Listen('click')
  handleClick() {
    this.formButtonEl?.click();
  }

  render() {
    return (
      <button part='inner-button' disabled={this.disabled} type='button' tabindex={0}>
        <slot></slot>
        <slot name='badge'></slot>
      </button>
    );
  }
}
