import { newE2EPage } from '@stencil/core/testing';

describe('je-column', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-column></je-column>');

    const element = await page.find('je-column');
    expect(element).toHaveClass('hydrated');
  });
});
