import { newSpecPage } from '@stencil/core/testing';
import { JePlaceholder } from '../je-placeholder';

describe('je-placeholder', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JePlaceholder],
      html: `<je-placeholder></je-placeholder>`,
    });
    expect(page.root).toEqualHtml(`
      <je-placeholder>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-placeholder>
    `);
  });
});
