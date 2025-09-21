import { newSpecPage } from '@stencil/core/testing';
import { JeControl } from '../je-control';

describe('je-control', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeControl],
      html: `<je-control></je-control>`,
    });
    expect(page.root).toEqualHtml(`
      <je-control>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-control>
    `);
  });
});
