import { newE2EPage } from '@stencil/core/testing';

describe('je-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-row></je-row>');

    const element = await page.find('je-row');
    expect(element).toHaveClass('hydrated');
  });
});
