import { newE2EPage } from '@stencil/core/testing';

describe('je-select-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-select-option></je-select-option>');

    const element = await page.find('je-select-option');
    expect(element).toHaveClass('hydrated');
  });
});
