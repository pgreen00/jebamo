import { newSpecPage } from '@stencil/core/testing';
import { JeTabs } from '../je-tabs';

describe('je-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeTabs],
      html: `<je-tabs></je-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <je-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-tabs>
    `);
  });
});
