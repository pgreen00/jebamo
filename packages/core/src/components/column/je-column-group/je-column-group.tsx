import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-column-group',
  styleUrl: 'je-column-group.scss',
  shadow: true,
})
export class JeColumnGroup {
  @Element() el: HTMLJeColumnGroupElement;

  /**
   * The number of columns the flex grid has.
   */
  @Prop() columns?: number;

  componentDidLoad() {
    if (this.columns) {
      this.el.style.setProperty('--je-columns', this.columns.toString());
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
