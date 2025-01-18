import { newSpecPage } from '@stencil/core/testing';
import { JeRadioGroup } from '../je-radio-group';

describe('je-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeRadioGroup],
      html: `<je-radio-group></je-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <je-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-radio-group>
    `);
  });
});
