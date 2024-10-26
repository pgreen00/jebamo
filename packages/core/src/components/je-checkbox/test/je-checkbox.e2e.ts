import { newE2EPage } from '@stencil/core/testing';

describe('je-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-checkbox></je-checkbox>');

    const element = await page.find('je-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
