import { newSpecPage } from '@stencil/core/testing';
import { JeCheckboxGroup } from '../je-checkbox-group';

describe('je-checkbox-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeCheckboxGroup],
      html: `<je-checkbox-group></je-checkbox-group>`,
    });
    expect(page.root).toEqualHtml(`
      <je-checkbox-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-checkbox-group>
    `);
  });
});
