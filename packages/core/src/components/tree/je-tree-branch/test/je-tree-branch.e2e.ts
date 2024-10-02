import { newE2EPage } from '@stencil/core/testing';

describe('je-tree-branch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-tree-branch></je-tree-branch>');

    const element = await page.find('je-tree-branch');
    expect(element).toHaveClass('hydrated');
  });
});
