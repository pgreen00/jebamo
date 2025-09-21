import { newE2EPage } from '@stencil/core/testing';

describe('je-split-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-split-panel></je-split-panel>');

    const element = await page.find('je-split-panel');
    expect(element).toHaveClass('hydrated');
  });
});
