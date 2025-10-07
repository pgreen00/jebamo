import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-overlay-content',
  styleUrl: 'je-overlay-content.css',
  shadow: true,
})
export class JeOverlayContent {
  @Element() el: HTMLJeOverlayContentElement;
  @Prop() label?: string;
  @Prop() closable = true;

  private get overlay() {
    return this.el.closest('je-overlay')
  }

  render() {
    return (
      <Host>
        <header>
          <je-toolbar>
            <slot name="label">
              {this.label && <h2 part='label'>{this.label}</h2>}
            </slot>
            <div class="end" slot='end'>
              <slot name='actions'/>
              {this.closable && <je-button size='lg' onClick={() => this.overlay.hide()}><je-icon>close</je-icon></je-button>}
            </div>
          </je-toolbar>
        </header>
        <slot name="body"/>
        <footer>
          <slot name='footer'/>
        </footer>
      </Host>
    );
  }
}
