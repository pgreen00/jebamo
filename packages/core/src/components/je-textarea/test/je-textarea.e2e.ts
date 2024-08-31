import { newE2EPage } from '@stencil/core/testing';

describe('je-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-textarea></je-textarea>');

    const element = await page.find('je-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
