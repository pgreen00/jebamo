import { newE2EPage } from '@stencil/core/testing';

describe('je-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-radio-group></je-radio-group>');

    const element = await page.find('je-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
