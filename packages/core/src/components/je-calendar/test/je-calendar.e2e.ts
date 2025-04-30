import { newE2EPage } from '@stencil/core/testing';

describe('je-calendar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<je-calendar></je-calendar>');

    const element = await page.find('je-calendar');
    expect(element).toHaveClass('hydrated');
  });
});
