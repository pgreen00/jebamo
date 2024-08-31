import { newE2EPage } from '@stencil/core/testing';

describe('je-loading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-loading></je-loading>');

    const element = await page.find('je-loading');
    expect(element).toHaveClass('hydrated');
  });
});
