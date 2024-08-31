import { newE2EPage } from '@stencil/core/testing';

describe('je-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-item></je-item>');

    const element = await page.find('je-item');
    expect(element).toHaveClass('hydrated');
  });
});
