import { newSpecPage } from '@stencil/core/testing';
import { JeDropzone } from '../je-dropzone';

describe('je-dropzone', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JeDropzone],
      html: `<je-dropzone></je-dropzone>`,
    });
    expect(page.root).toEqualHtml(`
      <je-dropzone>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </je-dropzone>
    `);
  });
});
