import { newSpecPage } from '@stencil/core/testing';
import { JeToast } from '../je-toast';

describe('je-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeToast],
      html: `<je-toast></je-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <je-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-toast>
    `);
  });
});
