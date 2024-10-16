import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'je-icon',
  styleUrl: 'je-icon.scss',
  shadow: true,
})
export class JeIcon {
  @Element() el!: HTMLJeIconElement;

  /** Google material icon name */
  @Prop() icon: string;

  /** Size of the icon */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /** Whether or not the icon should be filled */
  @Prop({ reflect: true }) fill?: boolean;

  /** Icon grade */
  @Prop({ reflect: true }) grade?: 'high' | 'low';

  /** Icon weight */
  @Prop() weight?: number;

  componentDidLoad() {
    if (this.weight) {
      this.el.style.setProperty('--je-weight', this.weight.toString());
    }
  }

  render() {
    return (
      <Host>
        {this.icon}
      </Host>
    );
  }
}
