import { newSpecPage } from '@stencil/core/testing';
import { JeCalendar } from '../je-calendar';

describe('je-calendar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeCalendar],
      html: `<je-calendar></je-calendar>`,
    });
    expect(page.root).toEqualHtml(`
      <je-calendar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-calendar>
    `);
  });
});
