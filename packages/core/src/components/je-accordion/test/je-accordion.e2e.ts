import { newE2EPage } from '@stencil/core/testing';

describe('je-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-accordion></je-accordion>');

    const element = await page.find('je-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
