import { newSpecPage } from '@stencil/core/testing';
import { JePage } from '../je-page';

describe('je-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JePage],
      html: `<je-page></je-page>`,
    });
    expect(page.root).toEqualHtml(`
      <je-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-page>
    `);
  });
});
