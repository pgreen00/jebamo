import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'je-card',
  styleUrl: 'je-card.css',
  shadow: {
    slotAssignment: 'manual'
  },
})
export class JeCard {
  @Element() el: HTMLElement
  slot: HTMLSlotElement;
  connectedCallback() {
    console.log('connected')
  }
  componentDidLoad() {
    const button = this.el.querySelector('span')
    if (button) this.slot.assign(button)
    const card = this.el.querySelector('je-card')
    if (card) this.slot.assign(card)
  }

  render() {
    return (
      <Host>
        <template>
          <span />
        </template>
        <slot name='media' />
        <slot name='header' />
        <div class='container'>
          <slot ref={el => this.slot = el} />
          <slot name='footer' />
        </div>
      </Host>
    );
  }
}
