import { newSpecPage } from '@stencil/core/testing';
import { JeLink } from '../je-link';

describe('je-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeLink],
      html: `<je-link></je-link>`,
    });
    expect(page.root).toEqualHtml(`
      <je-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-link>
    `);
  });
});
