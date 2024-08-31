import { newSpecPage } from '@stencil/core/testing';
import { JeToggle } from '../je-toggle';

describe('je-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeToggle],
      html: `<je-toggle></je-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <je-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-toggle>
    `);
  });
});
