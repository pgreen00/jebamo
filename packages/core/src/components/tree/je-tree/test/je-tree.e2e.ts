import { newE2EPage } from '@stencil/core/testing';

describe('je-tree', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-tree></je-tree>');

    const element = await page.find('je-tree');
    expect(element).toHaveClass('hydrated');
  });
});
