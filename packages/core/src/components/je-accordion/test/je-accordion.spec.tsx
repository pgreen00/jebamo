import { newSpecPage } from '@stencil/core/testing';
import { JeAccordion } from '../je-accordion';

describe('je-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeAccordion],
      html: `<je-accordion></je-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <je-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-accordion>
    `);
  });
});
