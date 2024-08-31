import { newSpecPage } from '@stencil/core/testing';
import { JeIcon } from '../je-icon';

describe('je-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeIcon],
      html: `<je-icon></je-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <je-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-icon>
    `);
  });
});
