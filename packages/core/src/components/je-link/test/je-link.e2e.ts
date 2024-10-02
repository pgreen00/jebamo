import { newE2EPage } from '@stencil/core/testing';

describe('je-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-link></je-link>');

    const element = await page.find('je-link');
    expect(element).toHaveClass('hydrated');
  });
});
