import { newE2EPage } from '@stencil/core/testing';

describe('je-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-tabs></je-tabs>');

    const element = await page.find('je-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
