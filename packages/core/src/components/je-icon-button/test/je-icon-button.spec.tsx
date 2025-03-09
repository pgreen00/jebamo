import { newSpecPage } from '@stencil/core/testing';
import { JeIconButton } from '../je-icon-button';

describe('je-icon-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeIconButton],
      html: `<je-icon-button></je-icon-button>`,
    });
    expect(page.root).toEqualHtml(`
      <je-icon-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-icon-button>
    `);
  });
});
