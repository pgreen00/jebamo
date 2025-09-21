import { newE2EPage } from '@stencil/core/testing';

describe('je-overlay-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-overlay-content></je-overlay-content>');

    const element = await page.find('je-overlay-content');
    expect(element).toHaveClass('hydrated');
  });
});
