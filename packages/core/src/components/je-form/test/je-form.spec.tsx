import { newSpecPage } from '@stencil/core/testing';
import { JeForm } from '../je-form';

describe('je-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeForm],
      html: `<je-form></je-form>`,
    });
    expect(page.root).toEqualHtml(`
      <je-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-form>
    `);
  });
});
