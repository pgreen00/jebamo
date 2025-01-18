import { newE2EPage } from '@stencil/core/testing';

describe('je-menu-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-menu-option></je-menu-option>');

    const element = await page.find('je-menu-option');
    expect(element).toHaveClass('hydrated');
  });
});
