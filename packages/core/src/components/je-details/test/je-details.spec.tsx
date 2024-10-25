import { newSpecPage } from '@stencil/core/testing';
import { JeDetails } from '../je-details';

describe('je-details', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeDetails],
      html: `<je-details></je-details>`,
    });
    expect(page.root).toEqualHtml(`
      <je-details>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-details>
    `);
  });
});
