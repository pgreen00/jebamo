import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-details',
  styleUrl: 'je-details.scss',
  shadow: true,
})
export class JeDetails {
  @Element() el!: HTMLElement;
  @Prop() summary?: string;
  @Prop({ mutable: true, reflect: true }) open = false;
  @Prop() iconToggle = false;
  @Prop() iconSide: 'left' | 'right' = 'right';

  render() {
    const icon = <je-icon>chevron_right</je-icon>
    return (
      <Host>
        {this.iconToggle ? (
          <je-toolbar>
            {this.iconSide == 'left' && <je-icon-button onClick={() => this.open = !this.open }>{icon}</je-icon-button>}
            <slot name='start'/>
            <slot name="summary">
              {this.summary && <summary>{this.summary}</summary>}
            </slot>
            <slot name='end' slot='end' />
            {this.iconSide == 'right' && <je-icon-button slot='end' onClick={() => this.open = !this.open }>{icon}</je-icon-button>}
          </je-toolbar>
        ) : (
          <button part='toggle' onClick={() => this.open = !this.open }>
            <je-toolbar>
              {this.iconSide == 'left' && <je-icon>chevron_right</je-icon>}
              <slot name='start'/>
              <slot name="summary">
                {this.summary && <summary>{this.summary}</summary>}
              </slot>
              <slot name='end' slot='end' />
              {this.iconSide == 'right' && <je-icon slot='end'>chevron_right</je-icon>}
            </je-toolbar>
          </button>
        )}
        <div part='content-container'>
          <div part='content'>
            <slot/>
          </div>
        </div>
      </Host>
    );
  }
}
