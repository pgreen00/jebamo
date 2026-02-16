import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeEqCss = ":host{display:block}";

const JeEq$1 = /*@__PURE__*/ proxyCustomElement(class JeEq extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '9614dc54e83c1fb414a47c2c8402adbdfcc2fb6a' }, h("slot", { key: '441e7522da5f32203eb76739a00465e68551dfd7' })));
    }
    static get style() { return jeEqCss; }
}, [257, "je-eq"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-eq"];
    components.forEach(tagName => { switch (tagName) {
        case "je-eq":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeEq$1);
            }
            break;
    } });
}

const JeEq = JeEq$1;
const defineCustomElement = defineCustomElement$1;

export { JeEq, defineCustomElement };
//# sourceMappingURL=je-eq.js.map

//# sourceMappingURL=je-eq.js.map