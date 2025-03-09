import { newSpecPage } from '@stencil/core/testing';
import { JeNote } from '../je-note';

describe('je-note', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeNote],
      html: `<je-note></je-note>`,
    });
    expect(page.root).toEqualHtml(`
      <je-note>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-note>
    `);
  });
});
