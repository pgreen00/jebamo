import { Component, Host, Listen, Prop, forceUpdate, h } from '@stencil/core';

const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'] as const;
const SIZE_TO_MEDIA = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
} as const;

@Component({
  tag: 'je-column',
  styleUrl: 'je-column.scss',
  shadow: true,
})
export class JeColumn {
  /**
   * The size of the column, in terms of how many columns it should take up out of the total available.
   */
  @Prop() size?: string;

  /**
   * The size of the column for xs screens, in terms of how many columns it should take up out of the total available.
   */
  @Prop() sizeXs?: string;

  /**
   * The size of the column for sm screens, in terms of how many columns it should take up out of the total available.
   */
  @Prop() sizeSm?: string;

  /**
   * The size of the column for md screens, in terms of how many columns it should take up out of the total available.
   */
  @Prop() sizeMd?: string;

  /**
   * The size of the column for lg screens, in terms of how many columns it should take up out of the total available.
   */
  @Prop() sizeLg?: string;

  /**
   * The size of the column for xl screens, in terms of how many columns it should take up out of the total available.
   */
  @Prop() sizeXl?: string;

  @Listen('resize', { target: 'window' })
  onResize() {
    forceUpdate(this);
  }

  private getColumns() {
    let matched: any;

    for (const breakpoint of BREAKPOINTS) {
      const matches = breakpoint ? window.matchMedia(SIZE_TO_MEDIA[breakpoint]).matches : true;
      const columns = this['size' + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
      if (matches && columns !== undefined) {
        matched = columns;
      }
    }

    return matched;
  }

  private calculateSize() {
    const columns = this.getColumns();

    if (!columns || columns === '') {
      return;
    }

    const colSize = columns === 'auto' ? 'auto' : `calc(calc(${columns} / var(--columns)) * 100%)`;

    return {
      flex: `0 0 ${colSize}`,
      width: `${colSize}`
    };
  }

  render() {
    return (
      <Host style={this.calculateSize()}>
        <slot></slot>
      </Host>
    );
  }
}
