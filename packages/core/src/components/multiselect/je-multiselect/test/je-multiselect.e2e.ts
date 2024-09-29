import { newE2EPage } from '@stencil/core/testing';

describe('je-multiselect', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-multiselect></je-multiselect>');

    const element = await page.find('je-multiselect');
    expect(element).toHaveClass('hydrated');
  });
});
