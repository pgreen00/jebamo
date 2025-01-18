import { newSpecPage } from '@stencil/core/testing';
import { JeMenu } from '../je-menu';

describe('je-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeMenu],
      html: `<je-menu></je-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <je-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-menu>
    `);
  });
});
