import { Component, Prop, h } from '@stencil/core';
import { Color } from '../../utils/utils';

@Component({
  tag: 'je-icon-button',
  styleUrl: 'je-icon-button.scss',
  shadow: true,
})
export class JeIconButton {
  /** Disables button */
  @Prop() disabled = false;

  /** Can set to submit or reset to participate in forms */
  @Prop() type?: 'submit' | 'reset';

  /** Shows a loading spinner and disables the button */
  @Prop() pending = false;

  /** Button fill */
  @Prop() fill: 'solid' | 'outline' | 'clear' = 'clear';

  /** Button size */
  @Prop() size: 'md' | 'lg' | 'sm' = 'md';

  /** Predefined colors */
  @Prop() color?: Color;

  /** Name of icon */
  @Prop() icon?: string;

  render() {
    return (
      <je-button exportparts='inner-button' fill={this.fill} color={this.color} size={this.size} pending={this.pending} type={this.type} disabled={this.disabled}>
        <slot>
          {this.icon && <je-icon fill={true} size={this.size == 'sm' ? 'xs' : this.size == 'lg' ? 'md' : 'sm'}>{this.icon}</je-icon>}
        </slot>
        <slot slot='badge' name='badge'></slot>
      </je-button>
    );
  }
}
