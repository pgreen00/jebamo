import { newE2EPage } from '@stencil/core/testing';

describe('je-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-section></je-section>');

    const element = await page.find('je-section');
    expect(element).toHaveClass('hydrated');
  });
});
