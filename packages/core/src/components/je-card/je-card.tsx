import { Component, Host, Prop, h } from '@stencil/core';
import { Color } from '../../utils/utils';

@Component({
  tag: 'je-card',
  styleUrl: 'je-card.scss',
  shadow: true,
})
export class JeCard {
  @Prop({ reflect: true }) color?: Color;
  @Prop({ reflect: true }) button?: boolean;

  render() {
    return (
      <Host>
        <slot name='media' />
        <slot name='header' />
        <div class='container'>
          <slot />
          <slot name='footer' />
        </div>
      </Host>
    );
  }
}
