import { newSpecPage } from '@stencil/core/testing';
import { JeReorderList } from '../je-reorder-list';

describe('je-reorder-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeReorderList],
      html: `<je-reorder-list></je-reorder-list>`,
    });
    expect(page.root).toEqualHtml(`
      <je-reorder-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-reorder-list>
    `);
  });
});
