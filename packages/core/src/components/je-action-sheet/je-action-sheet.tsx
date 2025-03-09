import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'je-action-sheet',
  styleUrl: 'je-action-sheet.scss',
  shadow: true
})
export class JeActionSheet {
  @Element() el: HTMLElement

  componentDidLoad() {
    const el = this.el.shadowRoot.querySelector('section')
    el.attachShadow({ mode: 'open' })
    const style = this.el.shadowRoot.querySelector('style')
    style.remove()
    el.shadowRoot.appendChild(style)
  }

  render() {
    return (
      <section>
        <style>{`
          :host {
            display: block;
            background-color: yellow;
          }
        `}</style>
        <h2 class="je-action-sheet-title">Action Sheet</h2>
      </section>
    );
  }
}
