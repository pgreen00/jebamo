import { newSpecPage } from '@stencil/core/testing';
import { JeSkeletonText } from '../je-skeleton-text';

describe('je-skeleton-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeSkeletonText],
      html: `<je-skeleton-text></je-skeleton-text>`,
    });
    expect(page.root).toEqualHtml(`
      <je-skeleton-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-skeleton-text>
    `);
  });
});
