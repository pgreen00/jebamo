import { newSpecPage } from '@stencil/core/testing';
import { JeOverlay } from '../je-overlay';

describe('je-overlay', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeOverlay],
      html: `<je-overlay></je-overlay>`,
    });
    expect(page.root).toEqualHtml(`
      <je-overlay>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-overlay>
    `);
  });
});
