import { newE2EPage } from '@stencil/core/testing';

describe('je-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-menu></je-menu>');

    const element = await page.find('je-menu');
    expect(element).toHaveClass('hydrated');
  });
});
