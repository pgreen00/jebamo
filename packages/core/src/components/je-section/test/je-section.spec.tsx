import { newSpecPage } from '@stencil/core/testing';
import { JeSection } from '../je-section';

describe('je-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeSection],
      html: `<je-section></je-section>`,
    });
    expect(page.root).toEqualHtml(`
      <je-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-section>
    `);
  });
});
