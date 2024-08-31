import { newE2EPage } from '@stencil/core/testing';

describe('je-infinite', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-infinite></je-infinite>');

    const element = await page.find('je-infinite');
    expect(element).toHaveClass('hydrated');
  });
});
