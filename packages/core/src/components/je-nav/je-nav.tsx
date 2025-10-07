import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'je-nav',
  styleUrl: 'je-nav.css'
})
export class JeNav {
  @Element() el!: HTMLJeNavElement;

  render() {
    return (
      <nav>
        <div class="__start">
          <slot/>
        </div>
        <div class="__end">
          <slot name='end'/>
        </div>
      </nav>
    );
  }
}
