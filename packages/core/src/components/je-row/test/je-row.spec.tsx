import { newSpecPage } from '@stencil/core/testing';
import { JeRow } from '../je-row';

describe('je-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeRow],
      html: `<je-row></je-row>`,
    });
    expect(page.root).toEqualHtml(`
      <je-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-row>
    `);
  });
});
