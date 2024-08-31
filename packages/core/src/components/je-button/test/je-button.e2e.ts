import { newE2EPage } from '@stencil/core/testing';

describe('je-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-button></je-button>');

    const element = await page.find('je-button');
    expect(element).toHaveClass('hydrated');
  });
});
