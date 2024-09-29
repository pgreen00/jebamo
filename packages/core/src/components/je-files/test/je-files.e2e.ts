import { newE2EPage } from '@stencil/core/testing';

describe('je-files', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-files></je-files>');

    const element = await page.find('je-files');
    expect(element).toHaveClass('hydrated');
  });
});
