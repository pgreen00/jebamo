import { newE2EPage } from '@stencil/core/testing';

describe('je-textfield', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-textfield></je-textfield>');

    const element = await page.find('je-textfield');
    expect(element).toHaveClass('hydrated');
  });
});
