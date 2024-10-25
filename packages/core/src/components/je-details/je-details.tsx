import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-details',
  styleUrl: 'je-details.scss',
  shadow: true,
})
export class JeDetails {
  @Element() el!: HTMLElement;
  @Prop() summary?: string;
  @Prop({ reflect: true, mutable: true }) state: 'open' | 'closed' = 'closed';

  render() {
    return (
      <je-card>
        <div part='summary-container' onClick={() => this.state = this.state == 'open' ? 'closed' : 'open' }>
          <slot name="summary">
            {this.summary && <summary>{this.summary}</summary>}
          </slot>
          <div part='details-icon'>
            <svg xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
            </svg>
          </div>
        </div>
        <div part='details-container'>
          <slot></slot>
        </div>
      </je-card>
    );
  }
}
