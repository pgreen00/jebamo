import { newE2EPage } from '@stencil/core/testing';

describe('je-reorder-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-reorder-list></je-reorder-list>');

    const element = await page.find('je-reorder-list');
    expect(element).toHaveClass('hydrated');
  });
});
