import { newSpecPage } from '@stencil/core/testing';
import { JeOverlayContent } from '../je-overlay-content';

describe('je-overlay-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeOverlayContent],
      html: `<je-overlay-content></je-overlay-content>`,
    });
    expect(page.root).toEqualHtml(`
      <je-overlay-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-overlay-content>
    `);
  });
});
