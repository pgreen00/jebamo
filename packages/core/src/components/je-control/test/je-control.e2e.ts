import { newE2EPage } from '@stencil/core/testing';

describe('je-control', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-control></je-control>');

    const element = await page.find('je-control');
    expect(element).toHaveClass('hydrated');
  });
});
