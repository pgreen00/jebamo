import { newE2EPage } from '@stencil/core/testing';

describe('je-icon-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-icon-button></je-icon-button>');

    const element = await page.find('je-icon-button');
    expect(element).toHaveClass('hydrated');
  });
});
