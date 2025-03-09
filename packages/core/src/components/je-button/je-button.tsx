import { Component, Prop, h, Element, Listen, Host } from '@stencil/core';
import { Color, COLORS, shade } from '../../utils/utils';

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
  @Prop() type?: 'submit' | 'reset';

  /** Expands the button to the full width of it's container */
  @Prop() expand = false;

  /** Button fill */
  @Prop() fill: 'solid' | 'outline' | 'clear' = 'solid';

  /** Button size */
  @Prop() size: 'md' | 'lg' | 'sm' = 'md';

  /** Predefined colors. Auto will switch between light and dark based on the current color scheme */
  @Prop() color: Color | 'auto' = 'primary';

  /** Overrides what the light mode color will be when color is "auto". */
  @Prop() light: Color = 'dark';

  /** Overrides what the dark mode color will be when color is "auto". */
  @Prop() dark: Color = 'light';

  componentDidLoad() {
    if (this.type) {
      const formEl = this.el.closest('form');
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

  private getColorShade(color: Color) {
    if (color == 'light') {
      return shade(color, 800);
    } else {
      return shade(color, 100);
    }
  }

  private getBackgroundShade(color: Color) {
    if (color == 'light') {
      return shade(color, 100);
    } else if (color == 'dark') {
      return shade(color, 800);
    } else {
      return COLORS[color];
    }
  }

  private getHoverShade(color: Color) {
    if (color == 'light') {
      return shade(color, 200);
    } else if (color == 'dark') {
      return shade(color, 900);
    } else {
      return shade(color, 600);
    }
  }

  private getActiveShade(color: Color) {
    if (color == 'light') {
      return shade(color, 300);
    } else if (color == 'dark') {
      return shade(color, 950);
    } else {
      return shade(color, 700);
    }
  }

  render() {
    return (
      <Host>
        <style>{`
          :host {
            display: contents;

            --height: ${this.size === 'sm' ? '30' : this.size === 'lg' ? '50' : '40'}px;
            --width: ${this.expand ? '100%' : 'fit-content'};
            --min-width: ${this.size === 'sm' ? '60' : this.size === 'lg' ? '100' : '80'}px;
            --font-size: ${this.size == 'sm' ? '0.9' : this.size == 'lg' ? '1.3' : '1.1'}em;
            --inline-padding: ${this.size === 'sm' ? '5' : this.size === 'lg' ? '20' : '10'}px;
            --color: ${this.color == 'auto' ? `light-dark(${this.getColorShade(this.light)}, ${this.getColorShade(this.dark)}` : this.getColorShade(this.color)};
            --background: ${this.color == 'auto' ? `light-dark(${this.getBackgroundShade(this.light)}, ${this.getBackgroundShade(this.dark)}` : this.getBackgroundShade(this.color)};
            --hover-background: ${this.color == 'auto' ? `light-dark(${this.getHoverShade(this.light)}, ${this.getHoverShade(this.dark)}` : this.getHoverShade(this.color)};
            --active-background: ${this.color == 'auto' ? `light-dark(${this.getActiveShade(this.light)}, ${this.getActiveShade(this.dark)}` : this.getActiveShade(this.color)};
          }
        `}</style>
        <button part='inner-button' disabled={this.disabled} type='button' tabindex={0} class={{ [this.fill]: true }}>
          <slot></slot>
          <slot name='badge'></slot>
        </button>
      </Host>
    );
  }
}
