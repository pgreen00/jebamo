import { newSpecPage } from '@stencil/core/testing';
import { JeTable } from '../je-table';

describe('je-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeTable],
      html: `<je-table></je-table>`,
    });
    expect(page.root).toEqualHtml(`
      <je-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-table>
    `);
  });
});
