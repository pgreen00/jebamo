import { newSpecPage } from '@stencil/core/testing';
import { JeActionSheet } from '../je-action-sheet';

describe('je-action-sheet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeActionSheet],
      html: `<je-action-sheet></je-action-sheet>`,
    });
    expect(page.root).toEqualHtml(`
      <je-action-sheet>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-action-sheet>
    `);
  });
});
