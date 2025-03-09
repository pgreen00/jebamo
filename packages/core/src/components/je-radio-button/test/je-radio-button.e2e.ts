import { newE2EPage } from '@stencil/core/testing';

describe('je-radio-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-radio-button></je-radio-button>');

    const element = await page.find('je-radio-button');
    expect(element).toHaveClass('hydrated');
  });
});
