import { newE2EPage } from '@stencil/core/testing';

describe('je-cell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-cell></je-cell>');

    const element = await page.find('je-cell');
    expect(element).toHaveClass('hydrated');
  });
});
