import { newSpecPage } from '@stencil/core/testing';
import { JeDatepicker } from '../je-datepicker';

describe('je-datepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeDatepicker],
      html: `<je-datepicker></je-datepicker>`,
    });
    expect(page.root).toEqualHtml(`
      <je-datepicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-datepicker>
    `);
  });
});
