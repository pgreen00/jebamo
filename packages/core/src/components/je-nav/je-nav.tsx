import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'je-nav',
  styleUrl: 'je-nav.scss'
})
export class JeNav {
  @Element() el!: HTMLJeNavElement;

  @Prop({ reflect: true }) mode: 'top' | 'side' = 'top';

  render() {
    if (this.mode == `side`) {
      return (
        <nav>
          <slot/>
        </nav>
      );
    } else {
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
}
