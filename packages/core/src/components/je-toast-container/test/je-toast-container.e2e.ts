import { newE2EPage } from '@stencil/core/testing';

describe('je-toast-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-toast-container></je-toast-container>');

    const element = await page.find('je-toast-container');
    expect(element).toHaveClass('hydrated');
  });
});
