import { newE2EPage } from '@stencil/core/testing';

describe('je-multiselect-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-multiselect-option></je-multiselect-option>');

    const element = await page.find('je-multiselect-option');
    expect(element).toHaveClass('hydrated');
  });
});
