import { newSpecPage } from '@stencil/core/testing';
import { JeTextfield } from '../je-textfield';

describe('je-textfield', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeTextfield],
      html: `<je-textfield></je-textfield>`,
    });
    expect(page.root).toEqualHtml(`
      <je-textfield>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-textfield>
    `);
  });
});
