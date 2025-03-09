import { newSpecPage } from '@stencil/core/testing';
import { JeOption } from '../je-option';

describe('je-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeOption],
      html: `<je-option></je-option>`,
    });
    expect(page.root).toEqualHtml(`
      <je-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-option>
    `);
  });
});
