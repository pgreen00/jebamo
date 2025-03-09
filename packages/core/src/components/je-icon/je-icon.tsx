import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'je-icon',
  styleUrl: 'je-icon.scss',
  shadow: {
    delegatesFocus: true
  },
})
export class JeIcon {
  @Element() el!: HTMLJeIconElement;

  /** Size of the icon */
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /** Whether or not the icon should be filled */
  @Prop() fill = false;

  /** Icon grade */
  @Prop() grade?: 'high' | 'low';

  /** Icon weight */
  @Prop() weight = 400;

  /** Makes the icon a button */
  @Prop() button = false;

  /** Disables button. Does nothing if button is not true */
  @Prop() disabled = false;

  render() {
    const size = this.size == 'xs' ? 16
      : this.size == 'sm' ? 20
      : this.size == 'lg' ? 40
      : this.size == 'xl' ? 48
      : 24;
    const style = `
      :host {
        --grade: ${this.grade == 'low' ? -25 : this.grade == 'high' ? 200 : 0};
        --weight: ${this.weight};
        --fill: ${this.fill ? 1 : 0};
        font-size: ${size}px;
        --optical: ${size};
      }
    `;
    if (this.button) {
      return (
        <Host class="__button">
          <style>{style}</style>
          <button disabled={this.disabled} type='button' tabindex={0}>
            <slot/>
          </button>
        </Host>
      );
    } else {
      return (
        <Host>
          <style>{style}</style>
          <slot />
        </Host>
      );
    }
  }
}
