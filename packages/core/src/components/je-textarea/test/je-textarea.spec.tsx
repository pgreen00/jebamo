import { newSpecPage } from '@stencil/core/testing';
import { JeTextarea } from '../je-textarea';

describe('je-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeTextarea],
      html: `<je-textarea></je-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <je-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-textarea>
    `);
  });
});
