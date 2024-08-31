import { newSpecPage } from '@stencil/core/testing';
import { JeInput } from '../je-input';

describe('je-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeInput],
      html: `<je-input></je-input>`,
    });
    expect(page.root).toEqualHtml(`
      <je-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-input>
    `);
  });
});
