import { newSpecPage } from '@stencil/core/testing';
import { JePill } from '../je-pill';

describe('je-pill', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JePill],
      html: `<je-pill></je-pill>`,
    });
    expect(page.root).toEqualHtml(`
      <je-pill>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-pill>
    `);
  });
});
