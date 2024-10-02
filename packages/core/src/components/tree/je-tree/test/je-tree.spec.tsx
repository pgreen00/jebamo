import { newSpecPage } from '@stencil/core/testing';
import { JeTree } from '../je-tree';

describe('je-tree', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeTree],
      html: `<je-tree></je-tree>`,
    });
    expect(page.root).toEqualHtml(`
      <je-tree>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-tree>
    `);
  });
});
