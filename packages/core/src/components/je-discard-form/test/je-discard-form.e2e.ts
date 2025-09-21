import { newE2EPage } from '@stencil/core/testing';

describe('je-discard-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-discard-form></je-discard-form>');

    const element = await page.find('je-discard-form');
    expect(element).toHaveClass('hydrated');
  });
});
