import { newSpecPage } from '@stencil/core/testing';
import { JeColumnGroup } from '../je-column-group';

describe('je-column-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeColumnGroup],
      html: `<je-column-group></je-column-group>`,
    });
    expect(page.root).toEqualHtml(`
      <je-column-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-column-group>
    `);
  });
});
