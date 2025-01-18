import { newSpecPage } from '@stencil/core/testing';
import { JeColumn } from '../je-column';

describe('je-column', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeColumn],
      html: `<je-column></je-column>`,
    });
    expect(page.root).toEqualHtml(`
      <je-column>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-column>
    `);
  });
});
