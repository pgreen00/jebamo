import { newE2EPage } from '@stencil/core/testing';

describe('je-breadcrumbs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-breadcrumbs></je-breadcrumbs>');

    const element = await page.find('je-breadcrumbs');
    expect(element).toHaveClass('hydrated');
  });
});
