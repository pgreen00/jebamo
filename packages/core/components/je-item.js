import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeItemCss = ":host{display:grid;grid-template-columns:auto 1fr auto;border-radius:var(--je-radius-md);box-sizing:border-box;align-items:center;transition:background-color 75ms ease-in-out}:host(:hover){background-color:light-dark(var(--je-primary-100), var(--je-primary-900))}div{display:flex;align-items:center;padding-inline:var(--je-spacing-3xs)}button{display:flex;margin:0;height:2rem;padding:0;border:0;box-sizing:border-box;font-family:inherit;padding-inline:var(--je-spacing-xs);cursor:pointer;background-color:transparent;color:inherit;align-items:center}";

const JeItem$1 = /*@__PURE__*/ proxyCustomElement(class JeItem extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'b5be5ad03d56102128b72ef6bb7c006b93643542' }, h("div", { key: 'ae86000297e4c7ee9cc2e058ce6d1a1e29b0c019' }, h("slot", { key: '8384e053ef5f83acf66d61f053b1ff656760da15', name: 'start' })), h("button", { key: '60cc7d7d164c8eb29ec856850b779fdfe579ba86', type: 'button' }, h("slot", { key: 'd066bc0e9736f2624e8cf11309e1c81f496e3cda' })), h("div", { key: '1ecf83d684a02ff81494857472f037fef29d2a63' }, h("slot", { key: '519e7b3f67fcef5f241451033c1ad66eaad93d75', name: 'end' }))));
    }
    static get delegatesFocus() { return true; }
    static get style() { return jeItemCss; }
}, [273, "je-item"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-item"];
    components.forEach(tagName => { switch (tagName) {
        case "je-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeItem$1);
            }
            break;
    } });
}

const JeItem = JeItem$1;
const defineCustomElement = defineCustomElement$1;

export { JeItem, defineCustomElement };
//# sourceMappingURL=je-item.js.map

//# sourceMappingURL=je-item.js.map