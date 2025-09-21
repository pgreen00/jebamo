import { newSpecPage } from '@stencil/core/testing';
import { JeStore } from '../je-store';

describe('je-store', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeStore],
      html: `<je-store></je-store>`,
    });
    expect(page.root).toEqualHtml(`
      <je-store>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-store>
    `);
  });
});
