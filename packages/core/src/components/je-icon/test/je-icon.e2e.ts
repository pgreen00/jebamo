import { newE2EPage } from '@stencil/core/testing';

describe('je-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-icon></je-icon>');

    const element = await page.find('je-icon');
    expect(element).toHaveClass('hydrated');
  });
});
