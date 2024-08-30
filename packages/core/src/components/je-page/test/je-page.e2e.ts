import { newE2EPage } from '@stencil/core/testing';

describe('je-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-page></je-page>');

    const element = await page.find('je-page');
    expect(element).toHaveClass('hydrated');
  });
});
