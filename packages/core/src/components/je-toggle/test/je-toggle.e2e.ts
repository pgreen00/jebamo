import { newE2EPage } from '@stencil/core/testing';

describe('je-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-toggle></je-toggle>');

    const element = await page.find('je-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
