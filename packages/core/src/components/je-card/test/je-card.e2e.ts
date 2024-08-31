import { newE2EPage } from '@stencil/core/testing';

describe('je-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-card></je-card>');

    const element = await page.find('je-card');
    expect(element).toHaveClass('hydrated');
  });
});
