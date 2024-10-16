import { newSpecPage } from '@stencil/core/testing';
import { JeDrawer } from '../je-drawer';

describe('je-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeDrawer],
      html: `<je-drawer></je-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <je-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-drawer>
    `);
  });
});
