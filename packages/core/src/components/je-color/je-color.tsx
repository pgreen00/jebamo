import { Component, Host, Listen, Prop, h, Element } from '@stencil/core';
import { Color } from '../../components';

@Component({
  tag: 'je-color',
  styleUrl: 'je-color.scss',
  shadow: true,
})
export class JeColor {
  @Element() el: HTMLJeColorElement;

  /** Predefined colors. Auto will switch between light and dark based on the closest je-page's theme. */
  @Prop({ reflect: true }) color: Color | 'auto' = 'primary';

  /** Overrides what the light mode color will be when color is "auto". */
  @Prop() lightModeColor: Color = 'dark';

  /** Overrides what the dark mode color will be when color is "auto". */
  @Prop() darkModeColor: Color = 'light';

  @Listen('themeChange', { target: 'body' })
  handleThemeChange(e: CustomEvent<'light' | 'dark'>) {
    if (this.color == 'auto') {
      this.el.toggleAttribute(this.lightModeColor, e.detail == 'light')
      this.el.toggleAttribute(this.darkModeColor, e.detail == 'dark')
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
