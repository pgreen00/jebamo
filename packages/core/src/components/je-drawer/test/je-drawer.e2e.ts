import { newE2EPage } from '@stencil/core/testing';

describe('je-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-drawer></je-drawer>');

    const element = await page.find('je-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
