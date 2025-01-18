import { newE2EPage } from '@stencil/core/testing';

describe('je-branch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-branch></je-branch>');

    const element = await page.find('je-branch');
    expect(element).toHaveClass('hydrated');
  });
});
