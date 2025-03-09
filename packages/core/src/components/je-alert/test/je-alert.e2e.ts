import { newE2EPage } from '@stencil/core/testing';

describe('je-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-alert></je-alert>');

    const element = await page.find('je-alert');
    expect(element).toHaveClass('hydrated');
  });
});
