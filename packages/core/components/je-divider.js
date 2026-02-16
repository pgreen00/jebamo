import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeDividerCss = ":host{--thickness:1px;--color:light-dark(var(--je-neutral-500), var(--je-neutral-800));background-color:var(--color)}:host([spacing=sm]){--spacing:var(--je-spacing-2xs)}:host([spacing=md]){--spacing:var(--je-spacing-sm)}:host([spacing=lg]){--spacing:var(--je-spacing-lg)}:host([type=horizontal]){display:block;width:100%;height:var(--thickness);margin-block:var(--spacing, 0)}:host([type=vertical]){display:inline-block;align-self:normal;width:var(--thickness);margin-inline:var(--spacing)}";

const JeDivider$1 = /*@__PURE__*/ proxyCustomElement(class JeDivider extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    type = 'horizontal';
    spacing = 'md';
    render() {
        return h(Host, { key: '1da8713110d7f1d42069d7bfe6e385d5735a3832' });
    }
    static get style() { return jeDividerCss; }
}, [257, "je-divider", {
        "type": [513],
        "spacing": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-divider"];
    components.forEach(tagName => { switch (tagName) {
        case "je-divider":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeDivider$1);
            }
            break;
    } });
}

const JeDivider = JeDivider$1;
const defineCustomElement = defineCustomElement$1;

export { JeDivider, defineCustomElement };
//# sourceMappingURL=je-divider.js.map

//# sourceMappingURL=je-divider.js.map