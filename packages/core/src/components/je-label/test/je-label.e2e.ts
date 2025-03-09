import { newE2EPage } from '@stencil/core/testing';

describe('je-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-label></je-label>');

    const element = await page.find('je-label');
    expect(element).toHaveClass('hydrated');
  });
});
