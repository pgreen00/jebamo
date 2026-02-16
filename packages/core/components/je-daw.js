import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeDawCss = ":host{display:block}";

const JeDaw$1 = /*@__PURE__*/ proxyCustomElement(class JeDaw extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '72a90f1b554bc5871ff9c48106960e2556cd8a23' }, h("slot", { key: 'b738ddc35ae6fe29d98476d1cfb317ff2de68be3' })));
    }
    static get style() { return jeDawCss; }
}, [257, "je-daw"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-daw"];
    components.forEach(tagName => { switch (tagName) {
        case "je-daw":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeDaw$1);
            }
            break;
    } });
}

const JeDaw = JeDaw$1;
const defineCustomElement = defineCustomElement$1;

export { JeDaw, defineCustomElement };
//# sourceMappingURL=je-daw.js.map

//# sourceMappingURL=je-daw.js.map