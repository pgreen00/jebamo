import { newE2EPage } from '@stencil/core/testing';

describe('je-dropzone', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-dropzone></je-dropzone>');

    const element = await page.find('je-dropzone');
    expect(element).toHaveClass('hydrated');
  });
});
