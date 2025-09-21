import { newSpecPage } from '@stencil/core/testing';
import { JeDiscardForm } from '../je-discard-form';

describe('je-discard-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeDiscardForm],
      html: `<je-discard-form></je-discard-form>`,
    });
    expect(page.root).toEqualHtml(`
      <je-discard-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-discard-form>
    `);
  });
});
