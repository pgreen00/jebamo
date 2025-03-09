import { newE2EPage } from '@stencil/core/testing';

describe('je-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-option></je-option>');

    const element = await page.find('je-option');
    expect(element).toHaveClass('hydrated');
  });
});
