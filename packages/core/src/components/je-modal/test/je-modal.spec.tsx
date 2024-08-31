import { newSpecPage } from '@stencil/core/testing';
import { JeModal } from '../je-modal';

describe('je-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeModal],
      html: `<je-modal></je-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <je-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-modal>
    `);
  });
});
