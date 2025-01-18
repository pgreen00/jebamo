import { newE2EPage } from '@stencil/core/testing';

describe('je-checkbox-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-checkbox-option></je-checkbox-option>');

    const element = await page.find('je-checkbox-option');
    expect(element).toHaveClass('hydrated');
  });
});
