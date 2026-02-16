import { p as proxyCustomElement, H, h } from './p-BE32ZzHI.js';

const jeLinkCss = ":host{display:contents;--color:light-dark(var(--je-primary-500), var(--je-primary-300));--visited-color:light-dark(var(--je-primary-600), var(--je-primary-400))}a{display:inline-flex;color:var(--color);text-decoration:none;outline-color:var(--je-primary-300);outline-offset:3px;cursor:pointer}.underline{text-decoration:underline}.bold{font-weight:var(--je-font-semi-bold)}";

const JeLink$1 = /*@__PURE__*/ proxyCustomElement(class JeLink extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    /** Underlines the text */
    underline = true;
    /** Makes text bold */
    bold = false;
    /** Passed to anchor */
    href;
    /** Passed to anchor */
    target;
    /** Passed to anchor */
    rel;
    /** Passed to anchor */
    download;
    render() {
        return (h("a", { key: '814936a672c52ca0cd3818ccde7f4c8bc27edfe0', part: 'anchor', tabindex: 0, href: this.href, target: this.target, rel: this.rel, download: this.download, class: { underline: this.underline, bold: this.bold } }, h("slot", { key: '7f956bcb29e989897addc20cfde9414fe0128003' })));
    }
    static get delegatesFocus() { return true; }
    static get style() { return jeLinkCss; }
}, [273, "je-link", {
        "underline": [4],
        "bold": [4],
        "href": [1],
        "target": [1],
        "rel": [1],
        "download": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-link"];
    components.forEach(tagName => { switch (tagName) {
        case "je-link":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeLink$1);
            }
            break;
    } });
}

const JeLink = JeLink$1;
const defineCustomElement = defineCustomElement$1;

export { JeLink, defineCustomElement };
//# sourceMappingURL=je-link.js.map

//# sourceMappingURL=je-link.js.map