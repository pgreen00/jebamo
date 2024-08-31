import { newSpecPage } from '@stencil/core/testing';
import { JeToolbar } from '../je-toolbar';

describe('je-toolbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeToolbar],
      html: `<je-toolbar></je-toolbar>`,
    });
    expect(page.root).toEqualHtml(`
      <je-toolbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-toolbar>
    `);
  });
});
