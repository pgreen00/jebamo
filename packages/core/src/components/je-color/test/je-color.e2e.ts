import { newE2EPage } from '@stencil/core/testing';

describe('je-color', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-color></je-color>');

    const element = await page.find('je-color');
    expect(element).toHaveClass('hydrated');
  });
});
