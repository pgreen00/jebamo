import { newSpecPage } from '@stencil/core/testing';
import { JeCard } from '../je-card';

describe('je-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeCard],
      html: `<je-card></je-card>`,
    });
    expect(page.root).toEqualHtml(`
      <je-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-card>
    `);
  });
});
