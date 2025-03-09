import { newSpecPage } from '@stencil/core/testing';
import { JeTooltip } from '../je-tooltip';

describe('je-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeTooltip],
      html: `<je-tooltip></je-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <je-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-tooltip>
    `);
  });
});
