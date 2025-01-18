import { newSpecPage } from '@stencil/core/testing';
import { JeBranch } from '../je-branch';

describe('je-branch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeBranch],
      html: `<je-branch></je-branch>`,
    });
    expect(page.root).toEqualHtml(`
      <je-branch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-branch>
    `);
  });
});
