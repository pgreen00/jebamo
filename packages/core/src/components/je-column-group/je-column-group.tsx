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

  /**
   * If the columns should wrap.
   */
  @Prop({ reflect: true }) wrap?: boolean;

  /**
   * Alignment of the columns.
   */
  @Prop({ reflect: true }) align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';

  /**
   * Justification of the columns.
   */
  @Prop({ reflect: true }) justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';

  /**
   * The gap between the columns.
   */
  @Prop({ reflect: true }) gap?: '3xs' | '2xs' |'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

  render() {
    return (
      <Host>
        <style>{`:host{--columns:${this.columns || 12}}`}</style>
        <slot></slot>
      </Host>
    );
  }
}
