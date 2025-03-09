import { newSpecPage } from '@stencil/core/testing';
import { JeItem } from '../je-item';

describe('je-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeItem],
      html: `<je-item></je-item>`,
    });
    expect(page.root).toEqualHtml(`
      <je-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-item>
    `);
  });
});
