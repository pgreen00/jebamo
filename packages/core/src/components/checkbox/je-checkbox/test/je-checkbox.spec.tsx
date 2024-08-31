import { newSpecPage } from '@stencil/core/testing';
import { JeCheckbox } from '../je-checkbox';

describe('je-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeCheckbox],
      html: `<je-checkbox></je-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <je-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-checkbox>
    `);
  });
});
