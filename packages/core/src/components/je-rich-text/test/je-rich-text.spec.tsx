import { newSpecPage } from '@stencil/core/testing';
import { JeRichText } from '../je-rich-text';

describe('je-rich-text', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [JeRichText],
      html: '<je-rich-text></je-rich-text>',
    });

    expect(page.root).toEqualHtml(`
      <je-rich-text>
        <div class="je-rich-text size-md">
          <div class="toolbar">
            <button class="toolbar-button" title="Bold">
              <i class="fas fa-bold"></i>
            </button>
            <button class="toolbar-button" title="Italic">
              <i class="fas fa-italic"></i>
            </button>
            <button class="toolbar-button" title="Underline">
              <i class="fas fa-underline"></i>
            </button>
            <button class="toolbar-button" title="Strikethrough">
              <i class="fas fa-strikethrough"></i>
            </button>
            <div class="separator"></div>
            <button class="toolbar-button" title="Insert Link">
              <i class="fas fa-link"></i>
            </button>
            <button class="toolbar-button" title="Insert Image">
              <i class="fas fa-image"></i>
            </button>
            <div class="separator"></div>
            <button class="toolbar-button" title="Ordered List">
              <i class="fas fa-list-ol"></i>
            </button>
            <button class="toolbar-button" title="Unordered List">
              <i class="fas fa-list-ul"></i>
            </button>
            <div class="separator"></div>
            <button class="toolbar-button" title="Align Left">
              <i class="fas fa-align-left"></i>
            </button>
            <button class="toolbar-button" title="Align Center">
              <i class="fas fa-align-center"></i>
            </button>
            <button class="toolbar-button" title="Align Right">
              <i class="fas fa-align-right"></i>
            </button>
            <div class="separator"></div>
            <button class="toolbar-button" title="Undo">
              <i class="fas fa-undo"></i>
            </button>
            <button class="toolbar-button" title="Redo">
              <i class="fas fa-redo"></i>
            </button>
          </div>
          <div class="content" contenteditable="true" data-placeholder="Start typing..." role="textbox" aria-multiline="true" aria-label="Rich text editor">
          </div>
        </div>
      </je-rich-text>
    `);
  });

  it('renders without toolbar when showToolbar is false', async () => {
    const page = await newSpecPage({
      components: [JeRichText],
      html: '<je-rich-text show-toolbar="false"></je-rich-text>',
    });

    const toolbar = page.root.querySelector('.toolbar');
    expect(toolbar).toBeNull();
  });

  it('applies disabled state correctly', async () => {
    const page = await newSpecPage({
      components: [JeRichText],
      html: '<je-rich-text disabled></je-rich-text>',
    });

    const root = page.root.querySelector('.je-rich-text');
    expect(root).toHaveClass('disabled');

    const content = page.root.querySelector('.content');
    expect(content.getAttribute('contenteditable')).toBe('false');

    const buttons = page.root.querySelectorAll('.toolbar-button');
    buttons.forEach(button => {
      expect(button).toHaveAttribute('disabled');
    });
  });

  it('applies readonly state correctly', async () => {
    const page = await newSpecPage({
      components: [JeRichText],
      html: '<je-rich-text readonly></je-rich-text>',
    });

    const root = page.root.querySelector('.je-rich-text');
    expect(root).toHaveClass('readonly');

    const content = page.root.querySelector('.content');
    expect(content.getAttribute('contenteditable')).toBe('false');
  });

  it('applies size variants correctly', async () => {
    const page = await newSpecPage({
      components: [JeRichText],
      html: '<je-rich-text size="lg"></je-rich-text>',
    });

    const root = page.root.querySelector('.je-rich-text');
    expect(root).toHaveClass('size-lg');
  });

  it('applies color variants correctly', async () => {
    const page = await newSpecPage({
      components: [JeRichText],
      html: '<je-rich-text color="primary"></je-rich-text>',
    });

    const root = page.root.querySelector('.je-rich-text');
    expect(root).toHaveClass('primary');
  });

  it('sets custom placeholder text', async () => {
    const page = await newSpecPage({
      components: [JeRichText],
      html: '<je-rich-text placeholder="Custom placeholder"></je-rich-text>',
    });

    const content = page.root.querySelector('.content');
    expect(content.getAttribute('data-placeholder')).toBe('Custom placeholder');
  });

  it('initializes with provided value', async () => {
    const page = await newSpecPage({
      components: [JeRichText],
      html: '<je-rich-text value="<p>Initial content</p>"></je-rich-text>',
    });

    const content = page.root.querySelector('.content');
    expect(content.innerHTML).toBe('<p>Initial content</p>');
  });

  it('emits change event when content changes', async () => {
    const page = await newSpecPage({
      components: [JeRichText],
      html: '<je-rich-text></je-rich-text>',
    });

    const changeSpy = jest.fn();
    page.root.addEventListener('change', changeSpy);

    const content = page.root.querySelector('.content');
    content.innerHTML = '<p>New content</p>';
    content.dispatchEvent(new Event('input'));

    expect(changeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { value: '<p>New content</p>' }
      })
    );
  });

  it('handles focus and blur events', async () => {
    const page = await newSpecPage({
      components: [JeRichText],
      html: '<je-rich-text></je-rich-text>',
    });

    const content = page.root.querySelector('.content');

    // Focus
    content.dispatchEvent(new Event('focus'));
    expect(page.root.querySelector('.je-rich-text')).toHaveClass('focused');

    // Blur
    content.dispatchEvent(new Event('blur'));
    expect(page.root.querySelector('.je-rich-text')).not.toHaveClass('focused');
  });

  it('executes toolbar commands correctly', async () => {
    const page = await newSpecPage({
      components: [JeRichText],
      html: '<je-rich-text></je-rich-text>',
    });

    // Mock document.execCommand
    const execCommandSpy = jest.spyOn(document, 'execCommand').mockImplementation(() => true);

    const boldButton = page.root.querySelector('[title="Bold"]') as HTMLButtonElement;
    boldButton.click();

    expect(execCommandSpy).toHaveBeenCalledWith('bold', false, null);
    execCommandSpy.mockRestore();
  });

  it('handles link insertion', async () => {
    const page = await newSpecPage({
      components: [JeRichText],
      html: '<je-rich-text></je-rich-text>',
    });

    // Mock prompt and execCommand
    const promptSpy = jest.spyOn(window, 'prompt').mockReturnValue('https://example.com');
    const execCommandSpy = jest.spyOn(document, 'execCommand').mockImplementation(() => true);

    const linkButton = page.root.querySelector('[title="Insert Link"]') as HTMLButtonElement;
    linkButton.click();

    expect(promptSpy).toHaveBeenCalledWith('Enter URL:');
    expect(execCommandSpy).toHaveBeenCalledWith('createLink', 'https://example.com');

    promptSpy.mockRestore();
    execCommandSpy.mockRestore();
  });

  it('handles image insertion', async () => {
    const page = await newSpecPage({
      components: [JeRichText],
      html: '<je-rich-text></je-rich-text>',
    });

    // Mock prompt and execCommand
    const promptSpy = jest.spyOn(window, 'prompt').mockReturnValue('https://example.com/image.jpg');
    const execCommandSpy = jest.spyOn(document, 'execCommand').mockImplementation(() => true);

    const imageButton = page.root.querySelector('[title="Insert Image"]') as HTMLButtonElement;
    imageButton.click();

    expect(promptSpy).toHaveBeenCalledWith('Enter image URL:');
    expect(execCommandSpy).toHaveBeenCalledWith('insertImage', 'https://example.com/image.jpg');

    promptSpy.mockRestore();
    execCommandSpy.mockRestore();
  });

  it('cleans up pasted content', async () => {
    const page = await newSpecPage({
      components: [JeRichText],
      html: '<je-rich-text></je-rich-text>',
    });

    const content = page.root.querySelector('.content');
    const pasteEvent = new ClipboardEvent('paste', {
      clipboardData: new DataTransfer()
    });

    // Mock clipboardData
    Object.defineProperty(pasteEvent, 'clipboardData', {
      value: {
        getData: jest.fn().mockReturnValue('Plain text content')
      }
    });

    const preventDefaultSpy = jest.spyOn(pasteEvent, 'preventDefault');
    const execCommandSpy = jest.spyOn(document, 'execCommand').mockImplementation(() => true);

    content.dispatchEvent(pasteEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(execCommandSpy).toHaveBeenCalledWith('insertText', false, 'Plain text content');

    preventDefaultSpy.mockRestore();
    execCommandSpy.mockRestore();
  });
});
