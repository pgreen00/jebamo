import { Component, h } from '@stencil/core';

@Component({
  tag: 'je-table',
  styleUrl: 'je-table.scss',
  scoped: true,
})
export class JeTable {
  render() {
    return (
      <table>
        <thead>
          <slot name="head"></slot>
        </thead>
        <tbody>
          <slot></slot>
        </tbody>
        <tfoot>
          <slot name="foot"></slot>
        </tfoot>
      </table>
    );
  }
}
