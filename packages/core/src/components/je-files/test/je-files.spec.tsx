import { newSpecPage } from '@stencil/core/testing';
import { JeFiles } from '../je-files';

describe('je-files', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeFiles],
      html: `<je-files></je-files>`,
    });
    expect(page.root).toEqualHtml(`
      <je-files>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-files>
    `);
  });
});
