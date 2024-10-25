import { newE2EPage } from '@stencil/core/testing';

describe('je-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-details></je-details>');

    const element = await page.find('je-details');
    expect(element).toHaveClass('hydrated');
  });
});
