import { newE2EPage } from '@stencil/core/testing';

describe('je-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-breadcrumb></je-breadcrumb>');

    const element = await page.find('je-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
