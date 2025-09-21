import { newSpecPage } from '@stencil/core/testing';
import { JeSplitPanel } from '../je-split-panel';

describe('je-split-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeSplitPanel],
      html: `<je-split-panel></je-split-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <je-split-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-split-panel>
    `);
  });
});
