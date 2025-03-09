import { newE2EPage } from '@stencil/core/testing';

describe('je-button-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-button-group></je-button-group>');

    const element = await page.find('je-button-group');
    expect(element).toHaveClass('hydrated');
  });
});
