import { newSpecPage } from '@stencil/core/testing';
import { JeCheckboxOption } from '../je-checkbox-option';

describe('je-checkbox-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeCheckboxOption],
      html: `<je-checkbox-option></je-checkbox-option>`,
    });
    expect(page.root).toEqualHtml(`
      <je-checkbox-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-checkbox-option>
    `);
  });
});
