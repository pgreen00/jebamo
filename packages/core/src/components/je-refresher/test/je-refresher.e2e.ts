import { newE2EPage } from '@stencil/core/testing';

describe('je-refresher', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-refresher></je-refresher>');

    const element = await page.find('je-refresher');
    expect(element).toHaveClass('hydrated');
  });
});
