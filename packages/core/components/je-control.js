import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeControlCss = ":host{display:block}";

const JeControl$1 = /*@__PURE__*/ proxyCustomElement(class JeControl extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '20ac02263bdd11f8e733a4b56b5936c2ab34bbe1' }, h("slot", { key: '6075b44098464f8e5a38768b7421f3a69e1bef60' })));
    }
    static get style() { return jeControlCss; }
}, [257, "je-control"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-control"];
    components.forEach(tagName => { switch (tagName) {
        case "je-control":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeControl$1);
            }
            break;
    } });
}

const JeControl = JeControl$1;
const defineCustomElement = defineCustomElement$1;

export { JeControl, defineCustomElement };
//# sourceMappingURL=je-control.js.map

//# sourceMappingURL=je-control.js.map