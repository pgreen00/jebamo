import { newE2EPage } from '@stencil/core/testing';

describe('je-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-nav></je-nav>');

    const element = await page.find('je-nav');
    expect(element).toHaveClass('hydrated');
  });
});
