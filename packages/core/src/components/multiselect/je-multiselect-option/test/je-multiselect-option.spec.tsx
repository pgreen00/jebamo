import { newSpecPage } from '@stencil/core/testing';
import { JeMultiselectOption } from '../je-multiselect-option';

describe('je-multiselect-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeMultiselectOption],
      html: `<je-multiselect-option></je-multiselect-option>`,
    });
    expect(page.root).toEqualHtml(`
      <je-multiselect-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-multiselect-option>
    `);
  });
});
