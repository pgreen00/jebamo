import { newE2EPage } from '@stencil/core/testing';

describe('je-datepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-datepicker></je-datepicker>');

    const element = await page.find('je-datepicker');
    expect(element).toHaveClass('hydrated');
  });
});
