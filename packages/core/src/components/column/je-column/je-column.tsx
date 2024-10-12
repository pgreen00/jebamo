import { Component, Host, Listen, Prop, forceUpdate, h } from '@stencil/core';

const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];
const SIZE_TO_MEDIA = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
};

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

  private matchBreakpoint(breakpoint: string | undefined) {
    if (breakpoint === undefined || breakpoint === '') {
      return true;
    }
    if ((window as any).matchMedia) {
      const mediaQuery = SIZE_TO_MEDIA[breakpoint];
      return window.matchMedia(mediaQuery).matches;
    }
    return false;
  };

  private getColumns(property: string) {
    let matched: any;

    for (const breakpoint of BREAKPOINTS) {
      const matches = this.matchBreakpoint(breakpoint);
      const columns = (this as any)[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
      if (matches && columns !== undefined) {
        matched = columns;
      }
    }

    return matched;
  }

  private calculateSize() {
    const columns = this.getColumns('size');

    if (!columns || columns === '') {
      return;
    }

    const colSize = columns === 'auto' ? 'auto' : `calc(calc(${columns} / var(--je-columns, 12)) * 100%)`;

    return {
      flex: `0 0 ${colSize}`,
      width: `${colSize}`,
      'max-width': `${colSize}`,
    };
  }

  render() {
    return (
      <Host style={{ ...this.calculateSize() }}>
        <slot></slot>
      </Host>
    );
  }
}
