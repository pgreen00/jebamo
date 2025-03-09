import { Component, Host, Prop, h } from '@stencil/core';
import { Color } from '../../components';
import { shade } from '../../utils/utils';

@Component({
  tag: 'je-color',
  shadow: true,
})
export class JeColor {
  /** Fixed color */
  @Prop({ reflect: true }) color?: Color;

  /** Color in light mode */
  @Prop() light: Color = 'dark';

  /** Color in dark mode */
  @Prop() dark: Color = 'light';

  private get cssValue() {
    if (this.color) {
      return this.getShade(this.color)
    } else {
      return `light-dark(${this.getShade(this.light)}, ${this.getShade(this.dark)})`
    }
  }

  private getShade(color: Color) {
    return shade(color, color == 'light' ? 900 : color == 'dark' ? 50 : 500)
  }

  render() {
    return (
      <Host>
        <style>{`:host{display:contents;color:${this.cssValue};}`}</style>
        <slot></slot>
      </Host>
    );
  }
}
