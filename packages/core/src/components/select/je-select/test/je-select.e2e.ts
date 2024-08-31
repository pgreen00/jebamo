import { newE2EPage } from '@stencil/core/testing';

describe('je-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-select></je-select>');

    const element = await page.find('je-select');
    expect(element).toHaveClass('hydrated');
  });
});
