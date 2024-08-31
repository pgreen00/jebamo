import { newE2EPage } from '@stencil/core/testing';

describe('je-toolbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-toolbar></je-toolbar>');

    const element = await page.find('je-toolbar');
    expect(element).toHaveClass('hydrated');
  });
});
