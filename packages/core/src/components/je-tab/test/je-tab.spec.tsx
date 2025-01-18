import { newSpecPage } from '@stencil/core/testing';
import { JeTab } from '../je-tab';

describe('je-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeTab],
      html: `<je-tab></je-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <je-tab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-tab>
    `);
  });
});
