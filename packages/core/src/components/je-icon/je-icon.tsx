import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'je-icon',
  styleUrl: 'je-icon.scss',
  shadow: {
    delegatesFocus: true
  },
})
export class JeIcon {
  /** Size of the icon */
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /** Whether or not the icon should be filled */
  @Prop() fill = false;

  /** Icon grade */
  @Prop() grade?: 'high' | 'low';

  /** Icon weight */
  @Prop() weight = 400;

  render() {
    const size = this.size == 'xs' ? 16
      : this.size == 'sm' ? 20
      : this.size == 'lg' ? 40
      : this.size == 'xl' ? 48
      : 24;
    return (
      <Host>
        <style>{`
          :host {
            --grade: ${this.grade == 'low' ? -25 : this.grade == 'high' ? 200 : 0};
            --weight: ${this.weight};
            --fill: ${this.fill ? 1 : 0};
            font-size: ${size}px;
            --optical: ${size};
          }
        `}</style>
        <slot />
      </Host>
    );
  }
}
