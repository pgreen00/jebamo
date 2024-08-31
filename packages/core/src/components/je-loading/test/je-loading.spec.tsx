import { newSpecPage } from '@stencil/core/testing';
import { JeLoading } from '../je-loading';

describe('je-loading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeLoading],
      html: `<je-loading></je-loading>`,
    });
    expect(page.root).toEqualHtml(`
      <je-loading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-loading>
    `);
  });
});
