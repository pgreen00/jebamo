import { newE2EPage } from '@stencil/core/testing';

describe('je-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-form></je-form>');

    const element = await page.find('je-form');
    expect(element).toHaveClass('hydrated');
  });
});
