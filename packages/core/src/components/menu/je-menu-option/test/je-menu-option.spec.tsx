import { newSpecPage } from '@stencil/core/testing';
import { JeMenuOption } from '../je-menu-option';

describe('je-menu-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeMenuOption],
      html: `<je-menu-option></je-menu-option>`,
    });
    expect(page.root).toEqualHtml(`
      <je-menu-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-menu-option>
    `);
  });
});
