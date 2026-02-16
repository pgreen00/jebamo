import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeLabelCss = ":host{display:inline-flex;font-weight:var(--je-font-semi-bold);color:light-dark(var(--je-neutral-800), var(--je-neutral-200));font-size:var(--je-font-md);gap:var(--je-spacing-2xs);cursor:inherit}:host([required])::after{content:\"*\";color:light-dark(var(--je-danger-400), var(--je-danger-300));font-weight:var(--je-font-semi-bold);font-size:var(--je-font-md)}";

const JeLabel = /*@__PURE__*/ proxyCustomElement(class JeLabel extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    required;
    render() {
        return (h(Host, { key: '18555d3735ea2bbe8157654f849011d13341f03a', "aria-hidden": 'true' }, h("slot", { key: '4523285681279487c3a49a264c86a743960908a9' })));
    }
    static get style() { return jeLabelCss; }
}, [257, "je-label", {
        "required": [516]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-label"];
    components.forEach(tagName => { switch (tagName) {
        case "je-label":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeLabel);
            }
            break;
    } });
}

export { JeLabel as J, defineCustomElement as d };
//# sourceMappingURL=p-HBw7xUgW.js.map

//# sourceMappingURL=p-HBw7xUgW.js.map