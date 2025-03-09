import { newSpecPage } from '@stencil/core/testing';
import { JeAlert } from '../je-alert';

describe('je-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeAlert],
      html: `<je-alert></je-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <je-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-alert>
    `);
  });
});
