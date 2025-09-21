import { newSpecPage } from '@stencil/core/testing';
import { JeReorderItem } from '../je-reorder-item';

describe('je-reorder-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeReorderItem],
      html: `<je-reorder-item></je-reorder-item>`,
    });
    expect(page.root).toEqualHtml(`
      <je-reorder-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-reorder-item>
    `);
  });
});
