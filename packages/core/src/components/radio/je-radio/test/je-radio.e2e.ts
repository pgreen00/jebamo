import { newE2EPage } from '@stencil/core/testing';

describe('je-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-radio></je-radio>');

    const element = await page.find('je-radio');
    expect(element).toHaveClass('hydrated');
  });
});
