import { newSpecPage } from '@stencil/core/testing';
import { JeMultiselect } from '../je-multiselect';

describe('je-multiselect', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeMultiselect],
      html: `<je-multiselect></je-multiselect>`,
    });
    expect(page.root).toEqualHtml(`
      <je-multiselect>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-multiselect>
    `);
  });
});
