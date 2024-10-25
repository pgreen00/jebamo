import { newSpecPage } from '@stencil/core/testing';
import { JeDivider } from '../je-divider';

describe('je-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeDivider],
      html: `<je-divider></je-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <je-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-divider>
    `);
  });
});
