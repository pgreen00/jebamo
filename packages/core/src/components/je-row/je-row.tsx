import { Component, h } from '@stencil/core';

@Component({
  tag: 'je-row',
  styleUrl: 'je-row.scss',
  scoped: true,
})
export class JeRow {
  render() {
    return (
      <tr>
        <slot></slot>
      </tr>
    );
  }
}
