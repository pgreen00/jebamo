import { newSpecPage } from '@stencil/core/testing';
import { JeDialog } from '../je-dialog';

describe('je-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeDialog],
      html: `<je-dialog></je-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <je-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-dialog>
    `);
  });
});
