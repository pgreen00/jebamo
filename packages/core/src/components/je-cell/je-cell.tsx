import { Component, Element, State, h } from '@stencil/core';

@Component({
  tag: 'je-cell',
  styleUrl: 'je-cell.scss',
  scoped: true,
})
export class JeCell {
  @Element() el: HTMLJeCellElement;
  @State() header = false;

  componentWillLoad() {
    this.header = this.el.closest('thead') !== null;
  }

  render() {
    if (this.header) {
      return (
        <th>
          <slot></slot>
        </th>
      );
    } else {
      return (
        <td>
          <slot></slot>
        </td>
      );
    }
  }
}
