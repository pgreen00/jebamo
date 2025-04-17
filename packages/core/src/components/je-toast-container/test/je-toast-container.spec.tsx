import { newSpecPage } from '@stencil/core/testing';
import { JeToastContainer } from '../je-toast-container';

describe('je-toast-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeToastContainer],
      html: `<je-toast-container></je-toast-container>`,
    });
    expect(page.root).toEqualHtml(`
      <je-toast-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-toast-container>
    `);
  });
});
