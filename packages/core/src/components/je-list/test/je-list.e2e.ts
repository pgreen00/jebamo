import { newE2EPage } from '@stencil/core/testing';

describe('je-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-list></je-list>');

    const element = await page.find('je-list');
    expect(element).toHaveClass('hydrated');
  });
});
