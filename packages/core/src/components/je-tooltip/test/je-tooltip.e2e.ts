import { newE2EPage } from '@stencil/core/testing';

describe('je-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-tooltip></je-tooltip>');

    const element = await page.find('je-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
