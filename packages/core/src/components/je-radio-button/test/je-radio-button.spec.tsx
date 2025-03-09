import { newSpecPage } from '@stencil/core/testing';
import { JeRadioButton } from '../je-radio-button';

describe('je-radio-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeRadioButton],
      html: `<je-radio-button></je-radio-button>`,
    });
    expect(page.root).toEqualHtml(`
      <je-radio-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-radio-button>
    `);
  });
});
