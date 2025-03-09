import { newSpecPage } from '@stencil/core/testing';
import { JeBreadcrumbs } from '../je-breadcrumbs';

describe('je-breadcrumbs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeBreadcrumbs],
      html: `<je-breadcrumbs></je-breadcrumbs>`,
    });
    expect(page.root).toEqualHtml(`
      <je-breadcrumbs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-breadcrumbs>
    `);
  });
});
