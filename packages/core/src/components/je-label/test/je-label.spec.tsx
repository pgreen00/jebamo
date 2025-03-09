import { newSpecPage } from '@stencil/core/testing';
import { JeLabel } from '../je-label';

describe('je-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeLabel],
      html: `<je-label></je-label>`,
    });
    expect(page.root).toEqualHtml(`
      <je-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-label>
    `);
  });
});
