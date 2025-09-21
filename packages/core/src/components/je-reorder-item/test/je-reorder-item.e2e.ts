import { newE2EPage } from '@stencil/core/testing';

describe('je-reorder-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-reorder-item></je-reorder-item>');

    const element = await page.find('je-reorder-item');
    expect(element).toHaveClass('hydrated');
  });
});
