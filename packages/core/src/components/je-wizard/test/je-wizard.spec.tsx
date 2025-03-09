import { newSpecPage } from '@stencil/core/testing';
import { JeWizard } from '../je-wizard';

describe('je-wizard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeWizard],
      html: `<je-wizard></je-wizard>`,
    });
    expect(page.root).toEqualHtml(`
      <je-wizard>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-wizard>
    `);
  });
});
