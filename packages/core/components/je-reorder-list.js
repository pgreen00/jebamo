import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeReorderListCss = ":host{display:block}";

const JeReorderList$1 = /*@__PURE__*/ proxyCustomElement(class JeReorderList extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '3444009ec5eefa21e2f5438d1dff9ccbe00452ec' }, h("slot", { key: 'e5d7056449eef8ef0a92d57d2e153bdb30ac501a' })));
    }
    static get style() { return jeReorderListCss; }
}, [257, "je-reorder-list"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-reorder-list"];
    components.forEach(tagName => { switch (tagName) {
        case "je-reorder-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeReorderList$1);
            }
            break;
    } });
}

const JeReorderList = JeReorderList$1;
const defineCustomElement = defineCustomElement$1;

export { JeReorderList, defineCustomElement };
//# sourceMappingURL=je-reorder-list.js.map

//# sourceMappingURL=je-reorder-list.js.map