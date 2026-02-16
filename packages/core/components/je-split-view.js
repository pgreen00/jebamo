import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeSplitViewCss = ":host{display:block}";

const JeSplitView$1 = /*@__PURE__*/ proxyCustomElement(class JeSplitView extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '3add21da50e3526542907676e9fcacede982fd82' }, h("slot", { key: '8fbf2482cd7f8651fd22f424bb892a0d40902bec' })));
    }
    static get style() { return jeSplitViewCss; }
}, [257, "je-split-view"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-split-view"];
    components.forEach(tagName => { switch (tagName) {
        case "je-split-view":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeSplitView$1);
            }
            break;
    } });
}

const JeSplitView = JeSplitView$1;
const defineCustomElement = defineCustomElement$1;

export { JeSplitView, defineCustomElement };
//# sourceMappingURL=je-split-view.js.map

//# sourceMappingURL=je-split-view.js.map