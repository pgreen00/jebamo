import { newSpecPage } from '@stencil/core/testing';
import { JeTreeBranch } from '../je-tree-branch';

describe('je-tree-branch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeTreeBranch],
      html: `<je-tree-branch></je-tree-branch>`,
    });
    expect(page.root).toEqualHtml(`
      <je-tree-branch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-tree-branch>
    `);
  });
});
