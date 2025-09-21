import { newE2EPage } from '@stencil/core/testing';

describe('je-store', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-store></je-store>');

    const element = await page.find('je-store');
    expect(element).toHaveClass('hydrated');
  });
});
