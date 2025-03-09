import { newSpecPage } from '@stencil/core/testing';
import { JeBreadcrumb } from '../je-breadcrumb';

describe('je-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeBreadcrumb],
      html: `<je-breadcrumb></je-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <je-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-breadcrumb>
    `);
  });
});
