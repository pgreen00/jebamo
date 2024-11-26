import { Component, Host, Listen, Prop, h, Element } from '@stencil/core';
import { Color } from '../../utils/utils';

@Component({
  tag: 'je-toast',
  styleUrl: 'je-toast.scss',
  shadow: true,
})
export class JeToast {
  @Element() el!: HTMLElement;
  @Prop() icon?: string;
  @Prop() message?: string;
  @Prop() closable = false;
  @Prop() color: Color = 'primary';
  @Prop() duration = 0;
  @Prop() countdown = false;

  @Listen('themeChange', { target: 'window' })
  handleThemeChange(e: CustomEvent<'light' | 'dark'>) {
    this.el.toggleAttribute('darkmode', e.detail == 'dark')
  }

  render() {
    return (
      <Host>
        <je-toolbar>
          <slot slot='start' name='start'>
            <je-icon class={{ [this.color]: true }} icon={this.icon} />
          </slot>
          <slot>
            {this.message && <span>{this.message}</span>}
          </slot>
          <slot slot='end' name='end'>
            {this.closable && <je-button fill='clear' iconOnly={true} color='auto'> <je-icon icon='close' /> </je-button>}
          </slot>
        </je-toolbar>
      </Host>
    );
  }
}
