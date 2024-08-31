import { newSpecPage } from '@stencil/core/testing';
import { JePopover } from '../je-popover';

describe('je-popover', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JePopover],
      html: `<je-popover></je-popover>`,
    });
    expect(page.root).toEqualHtml(`
      <je-popover>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-popover>
    `);
  });
});
