import { Component, Host, Prop, h } from '@stencil/core';
import { Color } from '../../components';

@Component({
  tag: 'je-link',
  styleUrl: 'je-link.scss',
  shadow: true,
})
export class JeLink {
  /** Predefined colors. Auto will switch between light and dark based on the closest je-page's theme. */
  @Prop() color?: Color | 'auto';

  /** Overrides what the light mode color will be when color is "auto". */
  @Prop() lightModeColor?: Color;

  /** Overrides what the dark mode color will be when color is "auto". */
  @Prop() darkModeColor?: Color;

  /** Underlines the text */
  @Prop() underline = true;

  /** Makes text bold */
  @Prop() bold = false;

  /** Passed to anchor */
  @Prop() href?: string;

  /** Passed to anchor */
  @Prop() target?: string;

  /** Passed to anchor */
  @Prop() rel?: string;

  /** Passed to anchor */
  @Prop() download?: string;

  render() {
    return (
      <Host>
        <a href={this.href} target={this.target} rel={this.rel} download={this.download}>
          <je-color class={{underline: this.underline, bold: this.bold}} color={this.color} light-mode-color={this.lightModeColor} dark-mode-color={this.darkModeColor}>
            <slot></slot>
          </je-color>
        </a>
      </Host>
    );
  }
}
