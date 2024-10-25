import { newE2EPage } from '@stencil/core/testing';

describe('je-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-divider></je-divider>');

    const element = await page.find('je-divider');
    expect(element).toHaveClass('hydrated');
  });
});
