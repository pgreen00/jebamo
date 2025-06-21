import { newSpecPage } from '@stencil/core/testing';
import { JeCell } from '../je-cell';

describe('je-cell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeCell],
      html: `<je-cell></je-cell>`,
    });
    expect(page.root).toEqualHtml(`
      <je-cell>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-cell>
    `);
  });
});
