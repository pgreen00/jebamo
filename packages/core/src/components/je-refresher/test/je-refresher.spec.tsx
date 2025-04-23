import { newSpecPage } from '@stencil/core/testing';
import { JeRefresher } from '../je-refresher';

describe('je-refresher', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeRefresher],
      html: `<je-refresher></je-refresher>`,
    });
    expect(page.root).toEqualHtml(`
      <je-refresher>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-refresher>
    `);
  });
});
