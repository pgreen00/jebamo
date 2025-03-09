import { newE2EPage } from '@stencil/core/testing';

describe('je-wizard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-wizard></je-wizard>');

    const element = await page.find('je-wizard');
    expect(element).toHaveClass('hydrated');
  });
});
