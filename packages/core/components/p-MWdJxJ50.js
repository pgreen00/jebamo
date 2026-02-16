import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeNoteCss = ":host{display:inline-flex;font-weight:var(--je-font-light);color:light-dark(var(--je-neutral-700), var(--je-neutral-400));font-size:var(--je-font-sm);gap:var(--je-spacing-2xs)}:host([invalid]){color:light-dark(var(--je-danger-400), var(--je-danger-300))}";

const JeNote = /*@__PURE__*/ proxyCustomElement(class JeNote extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    invalid;
    render() {
        return (h(Host, { key: 'c6ca69b78206f449603f012e4129515b812ef9b3', "aria-hidden": 'true' }, h("slot", { key: '9bcee765d0036b87afadd69fc79f9c0e7c5375e0' })));
    }
    static get style() { return jeNoteCss; }
}, [257, "je-note", {
        "invalid": [516]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-note"];
    components.forEach(tagName => { switch (tagName) {
        case "je-note":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeNote);
            }
            break;
    } });
}

export { JeNote as J, defineCustomElement as d };
//# sourceMappingURL=p-MWdJxJ50.js.map

//# sourceMappingURL=p-MWdJxJ50.js.map