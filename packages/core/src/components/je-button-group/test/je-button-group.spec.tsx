import { newSpecPage } from '@stencil/core/testing';
import { JeButtonGroup } from '../je-button-group';

describe('je-button-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeButtonGroup],
      html: `<je-button-group></je-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <je-button-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-button-group>
    `);
  });
});
