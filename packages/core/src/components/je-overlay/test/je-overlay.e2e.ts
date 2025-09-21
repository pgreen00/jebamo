import { newE2EPage } from '@stencil/core/testing';

describe('je-overlay', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-overlay></je-overlay>');

    const element = await page.find('je-overlay');
    expect(element).toHaveClass('hydrated');
  });
});
