import { newE2EPage } from '@stencil/core/testing';

describe('je-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-toast></je-toast>');

    const element = await page.find('je-toast');
    expect(element).toHaveClass('hydrated');
  });
});
