import { newSpecPage } from '@stencil/core/testing';
import { JeButton } from '../je-button';

describe('je-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeButton],
      html: `<je-button></je-button>`,
    });
    expect(page.root).toEqualHtml(`
      <je-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-button>
    `);
  });
});
