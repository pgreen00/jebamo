import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeReorderItemCss = ":host{display:block}";

const JeReorderItem$1 = /*@__PURE__*/ proxyCustomElement(class JeReorderItem extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '52a0f11e72b0db175d5b9c1421236b631c7db9f9' }, h("slot", { key: '22825071902aa01c81d448d6a91ffdf7b5221059' })));
    }
    static get style() { return jeReorderItemCss; }
}, [257, "je-reorder-item"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-reorder-item"];
    components.forEach(tagName => { switch (tagName) {
        case "je-reorder-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeReorderItem$1);
            }
            break;
    } });
}

const JeReorderItem = JeReorderItem$1;
const defineCustomElement = defineCustomElement$1;

export { JeReorderItem, defineCustomElement };
//# sourceMappingURL=je-reorder-item.js.map

//# sourceMappingURL=je-reorder-item.js.map