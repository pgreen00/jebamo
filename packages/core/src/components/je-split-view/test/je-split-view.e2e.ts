import { newE2EPage } from '@stencil/core/testing';

describe('je-split-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-split-view></je-split-view>');

    const element = await page.find('je-split-view');
    expect(element).toHaveClass('hydrated');
  });
});
