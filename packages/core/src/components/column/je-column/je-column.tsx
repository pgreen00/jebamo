import { Component, Host, Listen, Prop, forceUpdate, h } from '@stencil/core';

const win = typeof (window as any) !== 'undefined' ? (window as any) : undefined;
const SUPPORTS_VARS = win && !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'));
const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];
const SIZE_TO_MEDIA: any = {
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

      // Grab the value of the property, if it exists and our
      // media query matches we return the value
      const columns = (this as any)[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];

      if (matches && columns !== undefined) {
        matched = columns;
      }
    }

    // Return the last matched columns since the breakpoints
    // increase in size and we want to return the largest match
    return matched;
  }

  private calculateSize() {
    const columns = this.getColumns('size');

    if (!columns || columns === '') {
      return;
    }

    // If the size is set to auto then don't calculate a size
    const colSize =
      columns === 'auto'
        ? 'auto'
        : // If CSS supports variables we should use the grid columns var
        SUPPORTS_VARS
        ? `calc(calc(${columns} / var(--grid-columns, 12)) * 100%)`
        : // Convert the columns to a percentage by dividing by the total number
          // of columns (12) and then multiplying by 100
          (columns / 12) * 100 + '%';

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
