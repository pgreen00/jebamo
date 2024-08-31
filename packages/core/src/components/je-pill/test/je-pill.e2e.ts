import { newE2EPage } from '@stencil/core/testing';

describe('je-pill', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-pill></je-pill>');

    const element = await page.find('je-pill');
    expect(element).toHaveClass('hydrated');
  });
});
