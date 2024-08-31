import { newE2EPage } from '@stencil/core/testing';

describe('je-checkbox-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-checkbox-group></je-checkbox-group>');

    const element = await page.find('je-checkbox-group');
    expect(element).toHaveClass('hydrated');
  });
});
