import { newE2EPage } from '@stencil/core/testing';

describe('je-skeleton-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-skeleton-text></je-skeleton-text>');

    const element = await page.find('je-skeleton-text');
    expect(element).toHaveClass('hydrated');
  });
});
