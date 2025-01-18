import { newE2EPage } from '@stencil/core/testing';

describe('je-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-tab></je-tab>');

    const element = await page.find('je-tab');
    expect(element).toHaveClass('hydrated');
  });
});
