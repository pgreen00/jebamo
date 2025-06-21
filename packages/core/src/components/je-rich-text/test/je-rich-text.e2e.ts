import { newE2EPage } from '@stencil/core/testing';

describe('je-rich-text e2e', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<je-rich-text></je-rich-text>');
    const element = await page.find('je-rich-text');
    expect(element).toHaveClass('hydrated');
  });

  it('allows text input', async () => {
    const page = await newE2EPage();

    await page.setContent('<je-rich-text></je-rich-text>');
    const content = await page.find('je-rich-text .content');

    await content.click();
    await content.type('Hello, World!');

    const innerHTML = await content.getProperty('innerHTML');
    expect(innerHTML).toContain('Hello, World!');
  });

  it('applies bold formatting', async () => {
    const page = await newE2EPage();

    await page.setContent('<je-rich-text></je-rich-text>');
    const content = await page.find('je-rich-text .content');
    const boldButton = await page.find('je-rich-text [title="Bold"]');

    await content.click();
    await content.type('Bold text');
    await page.keyboard.down('Shift');
    await page.keyboard.press('Home');
    await page.keyboard.up('Shift');
    await boldButton.click();

    const innerHTML = await content.getProperty('innerHTML');
    expect(innerHTML).toContain('<strong>Bold text</strong>');
  });

  it('applies italic formatting', async () => {
    const page = await newE2EPage();

    await page.setContent('<je-rich-text></je-rich-text>');
    const content = await page.find('je-rich-text .content');
    const italicButton = await page.find('je-rich-text [title="Italic"]');

    await content.click();
    await content.type('Italic text');
    await page.keyboard.down('Shift');
    await page.keyboard.press('Home');
    await page.keyboard.up('Shift');
    await italicButton.click();

    const innerHTML = await content.getProperty('innerHTML');
    expect(innerHTML).toContain('<em>Italic text</em>');
  });

  it('creates ordered lists', async () => {
    const page = await newE2EPage();

    await page.setContent('<je-rich-text></je-rich-text>');
    const content = await page.find('je-rich-text .content');
    const olButton = await page.find('je-rich-text [title="Ordered List"]');

    await content.click();
    await content.type('List item 1');
    await page.keyboard.press('Enter');
    await content.type('List item 2');
    await page.keyboard.down('Shift');
    await page.keyboard.press('Home');
    await page.keyboard.up('Shift');
    await page.keyboard.down('Shift');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.up('Shift');
    await olButton.click();

    const innerHTML = await content.getProperty('innerHTML');
    expect(innerHTML).toContain('<ol>');
    expect(innerHTML).toContain('<li>');
  });

  it('creates unordered lists', async () => {
    const page = await newE2EPage();

    await page.setContent('<je-rich-text></je-rich-text>');
    const content = await page.find('je-rich-text .content');
    const ulButton = await page.find('je-rich-text [title="Unordered List"]');

    await content.click();
    await content.type('List item 1');
    await page.keyboard.press('Enter');
    await content.type('List item 2');
    await page.keyboard.down('Shift');
    await page.keyboard.press('Home');
    await page.keyboard.up('Shift');
    await page.keyboard.down('Shift');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.up('Shift');
    await ulButton.click();

    const innerHTML = await content.getProperty('innerHTML');
    expect(innerHTML).toContain('<ul>');
    expect(innerHTML).toContain('<li>');
  });

  it('aligns text center', async () => {
    const page = await newE2EPage();

    await page.setContent('<je-rich-text></je-rich-text>');
    const content = await page.find('je-rich-text .content');
    const centerButton = await page.find('je-rich-text [title="Align Center"]');

    await content.click();
    await content.type('Centered text');
    await page.keyboard.down('Shift');
    await page.keyboard.press('Home');
    await page.keyboard.up('Shift');
    await centerButton.click();

    const innerHTML = await content.getProperty('innerHTML');
    expect(innerHTML).toContain('text-align: center');
  });

  it('handles disabled state', async () => {
    const page = await newE2EPage();

    await page.setContent('<je-rich-text disabled></je-rich-text>');
    const content = await page.find('je-rich-text .content');

    await content.click();
    await content.type('This should not work');

    const innerHTML = await content.getProperty('innerHTML');
    expect(innerHTML).not.toContain('This should not work');
  });

  it('handles readonly state', async () => {
    const page = await newE2EPage();

    await page.setContent('<je-rich-text readonly></je-rich-text>');
    const content = await page.find('je-rich-text .content');

    await content.click();
    await content.type('This should not work');

    const innerHTML = await content.getProperty('innerHTML');
    expect(innerHTML).not.toContain('This should not work');
  });

  it('shows placeholder when empty', async () => {
    const page = await newE2EPage();

    await page.setContent('<je-rich-text placeholder="Custom placeholder"></je-rich-text>');
    const content = await page.find('je-rich-text .content');

    const placeholder = await content.getAttribute('data-placeholder');
    expect(placeholder).toBe('Custom placeholder');
  });

  it('emits change events', async () => {
    const page = await newE2EPage();

    await page.setContent('<je-rich-text></je-rich-text>');
    //const element = await page.find('je-rich-text');
    const content = await page.find('je-rich-text .content');

    const changeSpy = await page.spyOnEvent('change');

    await content.click();
    await content.type('Test content');

    expect(changeSpy).toHaveReceivedEventTimes(1);
    expect(changeSpy.firstEvent.detail.value).toContain('Test content');
  });
});
