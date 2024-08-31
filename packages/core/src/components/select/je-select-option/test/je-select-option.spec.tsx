import { newSpecPage } from '@stencil/core/testing';
import { JeSelectOption } from '../je-select-option';

describe('je-select-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeSelectOption],
      html: `<je-select-option></je-select-option>`,
    });
    expect(page.root).toEqualHtml(`
      <je-select-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-select-option>
    `);
  });
});
