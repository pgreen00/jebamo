import { newSpecPage } from '@stencil/core/testing';
import { JeInfinite } from '../je-infinite';

describe('je-infinite', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeInfinite],
      html: `<je-infinite></je-infinite>`,
    });
    expect(page.root).toEqualHtml(`
      <je-infinite>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-infinite>
    `);
  });
});
