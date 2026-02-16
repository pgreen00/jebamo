import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-BE32ZzHI.js';

const jeRichTextCss = ":host{display:block;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;--editor-border-color:#d1d5db;--editor-focus-color:#3b82f6;--editor-bg:#ffffff;--editor-toolbar-bg:#f9fafb;--editor-text-color:#111827;--editor-placeholder-color:#9ca3af;--editor-button-hover:#f3f4f6;--editor-button-active:#e5e7eb;--editor-border-radius:8px;--editor-transition:all 0.2s ease}.editor-container{border:2px solid var(--editor-border-color);border-radius:var(--editor-border-radius);background:var(--editor-bg);overflow:hidden;transition:var(--editor-transition)}.editor-container.editor-focused{border-color:var(--editor-focus-color);box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1)}.editor-container.editor-disabled{opacity:0.5;pointer-events:none}.editor-container.editor-readonly{background-color:var(--editor-toolbar-bg)}.editor-toolbar{display:flex;flex-wrap:wrap;align-items:center;padding:8px;background:var(--editor-toolbar-bg);border-bottom:1px solid var(--editor-border-color);gap:4px}.toolbar-btn{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;padding:0;border:none;background:transparent;color:var(--editor-text-color);border-radius:6px;cursor:pointer;transition:var(--editor-transition);font-size:16px;font-weight:600}.toolbar-btn:hover:not(:disabled){background:var(--editor-button-hover)}.toolbar-btn:active:not(:disabled),.toolbar-btn.active{background:var(--editor-button-active)}.toolbar-btn:disabled{opacity:0.4;cursor:not-allowed}.toolbar-btn:focus-visible{outline:2px solid var(--editor-focus-color);outline-offset:2px}.toolbar-icon{display:inline-block;font-style:normal;line-height:1}.toolbar-divider{width:1px;height:24px;background:var(--editor-border-color);margin:0 4px}.editor-content-wrapper{position:relative;background:var(--editor-bg)}.editor-content{padding:16px;color:var(--editor-text-color);font-size:16px;line-height:1.6;overflow-y:auto;word-wrap:break-word;outline:none}.editor-content:empty:before{content:attr(data-placeholder);color:var(--editor-placeholder-color);pointer-events:none;position:absolute}.editor-content h1{font-size:2em;font-weight:bold;margin:0.67em 0}.editor-content h2{font-size:1.5em;font-weight:bold;margin:0.83em 0}.editor-content p{margin:1em 0}.editor-content p:first-child{margin-top:0}.editor-content p:last-child{margin-bottom:0}.editor-content ul,.editor-content ol{margin:1em 0;padding-left:2em}.editor-content li{margin:0.5em 0}.editor-content a{color:var(--editor-focus-color);text-decoration:underline}.editor-content img{max-width:100%;height:auto;display:block;margin:1em 0;border-radius:4px}.editor-content blockquote{border-left:4px solid var(--editor-border-color);padding-left:1em;margin:1em 0;color:#6b7280}.editor-footer{display:flex;justify-content:flex-end;padding:8px 16px;background:var(--editor-toolbar-bg);border-top:1px solid var(--editor-border-color);font-size:12px;color:#6b7280}.word-count{user-select:none}.editor-content::-webkit-scrollbar{width:8px;height:8px}.editor-content::-webkit-scrollbar-track{background:var(--editor-toolbar-bg);border-radius:4px}.editor-content::-webkit-scrollbar-thumb{background:var(--editor-border-color);border-radius:4px}.editor-content::-webkit-scrollbar-thumb:hover{background:#9ca3af}@media (prefers-color-scheme: dark){:host{--editor-border-color:#374151;--editor-focus-color:#60a5fa;--editor-bg:#1f2937;--editor-toolbar-bg:#111827;--editor-text-color:#f3f4f6;--editor-placeholder-color:#6b7280;--editor-button-hover:#374151;--editor-button-active:#4b5563}}@media print{.editor-toolbar,.editor-footer{display:none}.editor-container{border:none;box-shadow:none}.editor-content{padding:0}}";

const JeRichText$1 = /*@__PURE__*/ proxyCustomElement(class JeRichText extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.editorChange = createEvent(this, "editorChange", 7);
        this.editorFocus = createEvent(this, "editorFocus", 7);
        this.editorBlur = createEvent(this, "editorBlur", 7);
    }
    get el() { return this; }
    placeholder = 'Start typing...';
    value = '';
    disabled = false;
    readonly = false;
    minHeight = '200px';
    maxHeight = '500px';
    showWordCount = true;
    isFocused = false;
    wordCount = 0;
    characterCount = 0;
    selectedLink = '';
    editorChange;
    editorFocus;
    editorBlur;
    editorRef;
    fileInputRef;
    toolbarCommands = [
        { command: 'undo', icon: '↶', label: 'Undo' },
        { command: 'redo', icon: '↷', label: 'Redo' },
        { command: 'divider', icon: '', label: '' },
        { command: 'bold', icon: 'B', label: 'Bold' },
        { command: 'italic', icon: 'I', label: 'Italic' },
        { command: 'underline', icon: 'U', label: 'Underline' },
        { command: 'strikeThrough', icon: 'S', label: 'Strikethrough' },
        { command: 'divider', icon: '', label: '' },
        { command: 'heading1', icon: 'H1', label: 'Heading 1' },
        { command: 'heading2', icon: 'H2', label: 'Heading 2' },
        { command: 'paragraph', icon: '¶', label: 'Paragraph' },
        { command: 'divider', icon: '', label: '' },
        { command: 'insertOrderedList', icon: '1.', label: 'Ordered List' },
        { command: 'insertUnorderedList', icon: '•', label: 'Unordered List' },
        { command: 'divider', icon: '', label: '' },
        { command: 'justifyLeft', icon: '⬅', label: 'Align Left' },
        { command: 'justifyCenter', icon: '↔', label: 'Align Center' },
        { command: 'justifyRight', icon: '➡', label: 'Align Right' },
        { command: 'justifyFull', icon: '☰', label: 'Justify' },
        { command: 'divider', icon: '', label: '' },
        { command: 'createLink', icon: '🔗', label: 'Insert Link' },
        { command: 'insertImage', icon: '🖼', label: 'Insert Image' },
        { command: 'divider', icon: '', label: '' },
        { command: 'removeFormat', icon: '✕', label: 'Clear Formatting' },
    ];
    componentDidLoad() {
        if (this.value) {
            this.editorRef.innerHTML = this.value;
            this.updateWordCount();
        }
    }
    async getContent() {
        return this.editorRef.innerHTML;
    }
    async getText() {
        return this.editorRef.innerText;
    }
    async setContent(html) {
        this.editorRef.innerHTML = html;
        this.updateWordCount();
        this.emitChange();
    }
    async clear() {
        this.editorRef.innerHTML = '';
        this.updateWordCount();
        this.emitChange();
    }
    executeCommand(command, value) {
        if (this.disabled || this.readonly)
            return;
        switch (command) {
            case 'heading1':
                document.execCommand('formatBlock', false, 'h1');
                break;
            case 'heading2':
                document.execCommand('formatBlock', false, 'h2');
                break;
            case 'paragraph':
                document.execCommand('formatBlock', false, 'p');
                break;
            case 'createLink':
                this.handleCreateLink();
                break;
            case 'insertImage':
                this.fileInputRef.click();
                break;
            case 'divider':
                // Do nothing for dividers
                break;
            default:
                document.execCommand(command, false, value);
        }
        this.editorRef.focus();
        this.emitChange();
    }
    handleCreateLink() {
        const selection = window.getSelection();
        const selectedText = selection.toString();
        if (!selectedText) {
            alert('Please select text to create a link');
            return;
        }
        const url = prompt('Enter URL:', 'https://');
        if (url) {
            document.execCommand('createLink', false, url);
        }
    }
    handleImageUpload(event) {
        const file = event.target.files?.[0];
        if (!file)
            return;
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = `<img src="${e.target.result}" alt="${file.name}" style="max-width: 100%; height: auto;">`;
            document.execCommand('insertHTML', false, img);
            this.emitChange();
        };
        reader.readAsDataURL(file);
    }
    handleInput = () => {
        this.updateWordCount();
        this.emitChange();
    };
    handleKeyDown = (event) => {
        // Handle keyboard shortcuts
        if (event.ctrlKey || event.metaKey) {
            switch (event.key) {
                case 'b':
                    event.preventDefault();
                    this.executeCommand('bold');
                    break;
                case 'i':
                    event.preventDefault();
                    this.executeCommand('italic');
                    break;
                case 'u':
                    event.preventDefault();
                    this.executeCommand('underline');
                    break;
                case 'z':
                    event.preventDefault();
                    this.executeCommand('undo');
                    break;
                case 'y':
                    event.preventDefault();
                    this.executeCommand('redo');
                    break;
            }
        }
    };
    handlePaste = (event) => {
        if (this.disabled || this.readonly) {
            event.preventDefault();
            return;
        }
        // Handle paste to clean HTML
        event.preventDefault();
        const text = event.clipboardData.getData('text/html') || event.clipboardData.getData('text/plain');
        if (text) {
            // Clean the HTML to prevent XSS and unwanted styles
            const cleanHtml = this.sanitizeHtml(text);
            document.execCommand('insertHTML', false, cleanHtml);
            this.emitChange();
        }
    };
    sanitizeHtml(html) {
        // Create a temporary element to parse HTML
        const temp = document.createElement('div');
        temp.innerHTML = html;
        // Remove script tags and dangerous attributes
        const scripts = temp.querySelectorAll('script, style, meta, link');
        scripts.forEach(el => el.remove());
        // Remove dangerous attributes
        const allElements = temp.querySelectorAll('*');
        allElements.forEach(el => {
            // Remove event handlers and dangerous attributes
            Array.from(el.attributes).forEach(attr => {
                if (attr.name.startsWith('on') || attr.name === 'style') {
                    el.removeAttribute(attr.name);
                }
            });
        });
        return temp.innerHTML;
    }
    updateWordCount() {
        const text = this.editorRef.innerText || '';
        this.characterCount = text.length;
        this.wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    }
    emitChange() {
        const html = this.editorRef.innerHTML;
        const text = this.editorRef.innerText || '';
        const isEmpty = !text.trim();
        this.editorChange.emit({
            html,
            text,
            isEmpty,
        });
    }
    handleFocus = (event) => {
        this.isFocused = true;
        this.editorFocus.emit(event);
    };
    handleBlur = (event) => {
        this.isFocused = false;
        this.editorBlur.emit(event);
    };
    isCommandActive(command) {
        switch (command) {
            case 'heading1':
                return document.queryCommandValue('formatBlock') === 'h1';
            case 'heading2':
                return document.queryCommandValue('formatBlock') === 'h2';
            case 'paragraph':
                return document.queryCommandValue('formatBlock') === 'p';
            default:
                return document.queryCommandState(command);
        }
    }
    render() {
        return (h(Host, { key: 'bc58c738a6c604634c3f20dade1b15f776bacdbe', class: {
                'editor-container': true,
                'editor-focused': this.isFocused,
                'editor-disabled': this.disabled,
                'editor-readonly': this.readonly,
            } }, h("div", { key: '77386c80db21683cad4e2c3297420bd8a50e871b', class: "editor-toolbar", role: "toolbar", "aria-label": "Formatting options" }, this.toolbarCommands.map(cmd => {
            if (cmd.command === 'divider') {
                return h("div", { class: "toolbar-divider", "aria-hidden": "true" });
            }
            return (h("button", { type: "button", class: {
                    'toolbar-btn': true,
                    'active': this.isCommandActive(cmd.command),
                }, onClick: () => this.executeCommand(cmd.command), disabled: this.disabled || this.readonly, title: cmd.label, "aria-label": cmd.label, "aria-pressed": this.isCommandActive(cmd.command) ? 'true' : 'false' }, h("span", { class: "toolbar-icon" }, cmd.icon)));
        })), h("div", { key: '422eb6ce3142ff8a6b7f3253a6169d42a5402ec6', class: "editor-content-wrapper" }, h("div", { key: '50dd2f3242d501d79a1a650654bdc1facbda5e32', tabindex: 0, ref: el => this.editorRef = el, class: "editor-content", contenteditable: !this.disabled && !this.readonly, onInput: this.handleInput, onKeyDown: this.handleKeyDown, onPaste: this.handlePaste, onFocus: this.handleFocus, onBlur: this.handleBlur, role: "textbox", "aria-multiline": "true", "aria-label": "Rich text editor", "aria-placeholder": this.placeholder, "data-placeholder": this.placeholder, style: {
                minHeight: this.minHeight,
                maxHeight: this.maxHeight,
            } })), this.showWordCount && (h("div", { key: '116ce693f987b7435679ff7f3076850b64ccb5ac', class: "editor-footer" }, h("span", { key: 'efa2a3b64dd668371c0917a154e937ad2cc8a8fa', class: "word-count" }, "Words: ", this.wordCount, " | Characters: ", this.characterCount))), h("input", { key: '9fe2e31cc5b6b1ffcf25d2c91ca2f3dc65f07732', ref: el => this.fileInputRef = el, type: "file", accept: "image/*", style: { display: 'none' }, onChange: this.handleImageUpload.bind(this) })));
    }
    static get delegatesFocus() { return true; }
    static get style() { return jeRichTextCss; }
}, [273, "je-rich-text", {
        "placeholder": [1],
        "value": [1],
        "disabled": [4],
        "readonly": [4],
        "minHeight": [1, "min-height"],
        "maxHeight": [1, "max-height"],
        "showWordCount": [4, "show-word-count"],
        "isFocused": [32],
        "wordCount": [32],
        "characterCount": [32],
        "selectedLink": [32],
        "getContent": [64],
        "getText": [64],
        "setContent": [64],
        "clear": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-rich-text"];
    components.forEach(tagName => { switch (tagName) {
        case "je-rich-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeRichText$1);
            }
            break;
    } });
}

const JeRichText = JeRichText$1;
const defineCustomElement = defineCustomElement$1;

export { JeRichText, defineCustomElement };
//# sourceMappingURL=je-rich-text.js.map

//# sourceMappingURL=je-rich-text.js.map