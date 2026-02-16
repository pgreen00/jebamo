import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeCompCss = ":host{display:block}";

const JeComp$1 = /*@__PURE__*/ proxyCustomElement(class JeComp extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '0daeddcc1953e14d46b037a14dc0ac1d98ea7658' }, h("slot", { key: 'f35df6711fc72b14af3d2976a50845e9e123b985' })));
    }
    static get style() { return jeCompCss; }
}, [257, "je-comp"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-comp"];
    components.forEach(tagName => { switch (tagName) {
        case "je-comp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeComp$1);
            }
            break;
    } });
}

const JeComp = JeComp$1;
const defineCustomElement = defineCustomElement$1;

export { JeComp, defineCustomElement };
//# sourceMappingURL=je-comp.js.map

//# sourceMappingURL=je-comp.js.map