import { newSpecPage } from '@stencil/core/testing';
import { JeSplitView } from '../je-split-view';

describe('je-split-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeSplitView],
      html: `<je-split-view></je-split-view>`,
    });
    expect(page.root).toEqualHtml(`
      <je-split-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-split-view>
    `);
  });
});
