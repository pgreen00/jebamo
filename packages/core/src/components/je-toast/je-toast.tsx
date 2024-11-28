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
  @Prop() header?: string;
  @Prop() message?: string;
  @Prop() closable = false;
  @Prop() color: Color = 'primary';
  @Prop() duration = 0;
  @Prop() progress = false;
  @Prop({ reflect: true }) type: 'bar' | 'card' = 'bar';

  @Listen('themeChange', { target: 'window' })
  handleThemeChange(e: CustomEvent<'light' | 'dark'>) {
    this.el.toggleAttribute('darkmode', e.detail == 'dark')
  }

  render() {
    if (this.type == 'card') {
      return (
        <Host>
          <div class='border'></div>
          <je-toolbar>
            {this.icon && <je-icon slot='start' class={this.color} icon={this.icon} />}
            {this.header && <span part='header'>{this.header}</span>}
            {this.closable && <je-button slot='end' fill='clear' iconOnly={true} color='auto'> <je-icon icon='close' /> </je-button>}
          </je-toolbar>
          <je-toolbar class='card-body'>
            {this.icon && <je-icon slot='start' style={{ opacity: '0' }} icon={this.icon} />}
            <slot name='content'>
              {this.message && <span part='message'>{this.message}</span>}
            </slot>
          </je-toolbar>
          <je-toolbar>
            <slot slot='start' name='start'></slot>
            <slot slot='end' name='end'></slot>
          </je-toolbar>
          {this.progress && <div class='progress' style={{ animationDuration: `${this.duration}ms` }}></div>}
        </Host>
      );
    } else {
      return (
        <Host>
          <div class='border'></div>
          <je-toolbar class='bar'>
            <slot slot='start' name='start'>
              {this.icon && <je-icon class={this.color} icon={this.icon} />}
            </slot>
            <slot name='content'>
              <div>
                {this.header && <span part='header'>{this.header}</span>}
                {this.message && <span part='message'>{this.message}</span>}
              </div>
            </slot>
            <slot slot='end' name='end'>
              {this.closable && <je-button fill='clear' iconOnly={true} color='auto'> <je-icon icon='close' /> </je-button>}
            </slot>
          </je-toolbar>
          {this.progress && <div class='progress' style={{ animationDuration: `${this.duration}ms` }}></div>}
        </Host>
      );
    }
  }
}
