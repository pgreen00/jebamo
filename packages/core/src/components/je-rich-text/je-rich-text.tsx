import { Component, Host, h, Prop, Element, Listen } from '@stencil/core';

interface ToolbarAction {
  name: string;
  icon: string;
  title: string;
  result: () => void;
}

const toolbarActions: ToolbarAction[] = [
  {
    name: 'bold',
    icon: 'bold',
    title: 'Bold',
    result: () => document.execCommand('bold', false, null)
  },
  {
    name: 'italic',
    icon: 'italic',
    title: 'Italic',
    result: () => document.execCommand('italic', false, null)
  },
  {
    name: 'underline',
    icon: 'underline',
    title: 'Underline',
    result: () => document.execCommand('underline', false, null)
  },
  {
    name: 'strikethrough',
    icon: 'strikethrough',
    title: 'Strikethrough',
    result: () => document.execCommand('strikethrough', false, null)
  },
  {
    name: 'separator',
    icon: '|',
    title: '',
    result: () => {}
  },
  {
    name: 'link',
    icon: 'link',
    title: 'Insert Link',
    result: () => {
      const url = prompt('Enter URL:');
      if (url) {
        document.execCommand('createLink', false, url);
      }
    }
  },
  {
    name: 'image',
    icon: 'image',
    title: 'Insert Image',
    result: () => {
      const url = prompt('Enter image URL:');
      if (url) {
        document.execCommand('insertImage', false, url);
      }
    }
  },
  {
    name: 'separator2',
    icon: '|',
    title: '',
    result: () => {}
  },
  {
    name: 'ol',
    icon: 'list-ol',
    title: 'Ordered List',
    result: () => document.execCommand('insertOrderedList', false, null)
  },
  {
    name: 'ul',
    icon: 'list-ul',
    title: 'Unordered List',
    result: () => document.execCommand('insertUnorderedList', false, null)
  },
  {
    name: 'separator3',
    icon: '|',
    title: '',
    result: () => {}
  },
  {
    name: 'align-left',
    icon: 'align-left',
    title: 'Align Left',
    result: () => document.execCommand('justifyLeft', false, null)
  },
  {
    name: 'align-center',
    icon: 'align-center',
    title: 'Align Center',
    result: () => document.execCommand('justifyCenter', false, null)
  },
  {
    name: 'align-right',
    icon: 'align-right',
    title: 'Align Right',
    result: () => document.execCommand('justifyRight', false, null)
  },
  {
    name: 'separator4',
    icon: '|',
    title: '',
    result: () => {}
  },
  {
    name: 'undo',
    icon: 'undo',
    title: 'Undo',
    result: () => document.execCommand('undo', false, null)
  },
  {
    name: 'redo',
    icon: 'redo',
    title: 'Redo',
    result: () => document.execCommand('redo', false, null)
  }
];

@Component({
  tag: 'je-rich-text',
  styleUrl: 'je-rich-text.scss',
  shadow: true,
})
export class JeRichText {
  @Element() el: HTMLJeRichTextElement;

  /** The content of the rich text editor */
  @Prop({ mutable: true }) value = '';

  @Listen('paste')
  onPaste(event: ClipboardEvent) {
    // Clean up pasted content
    event.preventDefault();
    const text = event.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  }

  private handleToolbarClick(action: ToolbarAction) {
    if (action.name.startsWith('separator')) return;

    action.result();
  }

  private getIconClass(icon: string): string {
    const iconMap = {
      'bold': 'format_bold',
      'italic': 'format_italic',
      'underline': 'format_underlined',
      'strikethrough': 'format_strikethrough',
      'link': 'link',
      'image': 'image',
      'list-ol': 'format_list_numbered',
      'list-ul': 'format_list_bulleted',
      'align-left': 'align_start',
      'align-center': 'align_center',
      'align-right': 'align_end',
      'undo': 'undo',
      'redo': 'redo'
    };

    return iconMap[icon] || icon;
  }

  render() {
    return (
      <Host>
        <div class="toolbar">
          {toolbarActions.map(action => (
            action.name.startsWith('separator') ? (
              <je-divider type="vertical" spacing="sm" key={action.name}></je-divider>
            ) : (
              <je-icon-button
                key={action.name}
                icon={this.getIconClass(action.icon)}
                title={action.title}
                onClick={() => this.handleToolbarClick(action)}
              ></je-icon-button>
            )
          ))}
        </div>
        <div
          class="content"
          contentEditable={true}
          innerHTML={this.value}
          role="textbox"
          aria-multiline="true"
          aria-label="Rich text editor"
        ></div>
      </Host>
    );
  }
}
