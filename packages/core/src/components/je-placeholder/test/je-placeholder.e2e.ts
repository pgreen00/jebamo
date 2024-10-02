import { newE2EPage } from '@stencil/core/testing';

describe('je-placeholder', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-placeholder></je-placeholder>');

    const element = await page.find('je-placeholder');
    expect(element).toHaveClass('hydrated');
  });
});
