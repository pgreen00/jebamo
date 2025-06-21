import { newE2EPage } from '@stencil/core/testing';

describe('je-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-table></je-table>');

    const element = await page.find('je-table');
    expect(element).toHaveClass('hydrated');
  });
});
