import { newSpecPage } from '@stencil/core/testing';
import { JeSelect } from '../je-select';

describe('je-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeSelect],
      html: `<je-select></je-select>`,
    });
    expect(page.root).toEqualHtml(`
      <je-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-select>
    `);
  });
});
