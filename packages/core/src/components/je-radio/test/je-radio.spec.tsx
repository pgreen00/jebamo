import { newSpecPage } from '@stencil/core/testing';
import { JeRadio } from '../je-radio';

describe('je-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeRadio],
      html: `<je-radio></je-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <je-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-radio>
    `);
  });
});
