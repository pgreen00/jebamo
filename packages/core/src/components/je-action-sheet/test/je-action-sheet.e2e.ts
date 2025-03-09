import { newE2EPage } from '@stencil/core/testing';

describe('je-action-sheet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-action-sheet></je-action-sheet>');

    const element = await page.find('je-action-sheet');
    expect(element).toHaveClass('hydrated');
  });
});
