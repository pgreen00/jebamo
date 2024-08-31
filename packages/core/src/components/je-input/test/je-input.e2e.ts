import { newE2EPage } from '@stencil/core/testing';

describe('je-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-input></je-input>');

    const element = await page.find('je-input');
    expect(element).toHaveClass('hydrated');
  });
});
