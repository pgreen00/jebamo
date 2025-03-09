import { newE2EPage } from '@stencil/core/testing';

describe('je-note', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-note></je-note>');

    const element = await page.find('je-note');
    expect(element).toHaveClass('hydrated');
  });
});
