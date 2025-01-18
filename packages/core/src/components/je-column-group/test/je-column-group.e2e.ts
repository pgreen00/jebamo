import { newE2EPage } from '@stencil/core/testing';

describe('je-column-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-column-group></je-column-group>');

    const element = await page.find('je-column-group');
    expect(element).toHaveClass('hydrated');
  });
});
