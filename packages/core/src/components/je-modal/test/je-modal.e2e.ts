import { newE2EPage } from '@stencil/core/testing';

describe('je-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-modal></je-modal>');

    const element = await page.find('je-modal');
    expect(element).toHaveClass('hydrated');
  });
});
