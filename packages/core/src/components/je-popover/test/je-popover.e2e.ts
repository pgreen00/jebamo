import { newE2EPage } from '@stencil/core/testing';

describe('je-popover', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-popover></je-popover>');

    const element = await page.find('je-popover');
    expect(element).toHaveClass('hydrated');
  });
});
