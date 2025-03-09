import { newSpecPage } from '@stencil/core/testing';
import { JeList } from '../je-list';

describe('je-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeList],
      html: `<je-list></je-list>`,
    });
    expect(page.root).toEqualHtml(`
      <je-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-list>
    `);
  });
});
