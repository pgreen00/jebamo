import { newSpecPage } from '@stencil/core/testing';
import { JeColor } from '../je-color';

describe('je-color', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeColor],
      html: `<je-color></je-color>`,
    });
    expect(page.root).toEqualHtml(`
      <je-color>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-color>
    `);
  });
});
