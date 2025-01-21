import { newE2EPage } from '@stencil/core/testing';

describe('je-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-dialog></je-dialog>');

    const element = await page.find('je-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
