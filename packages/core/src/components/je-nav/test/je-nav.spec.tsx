import { newSpecPage } from '@stencil/core/testing';
import { JeNav } from '../je-nav';

describe('je-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeNav],
      html: `<je-nav></je-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <je-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-nav>
    `);
  });
});
