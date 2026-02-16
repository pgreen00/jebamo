import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeGridCss = ":host{display:block}";

const JeGrid$1 = /*@__PURE__*/ proxyCustomElement(class JeGrid extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '0aff620b803df8febd2c2e4e273daef5da7e3341' }, h("slot", { key: 'fd9b0e52d66b2a2f4f0be89bb8ae0c4207425729' })));
    }
    static get style() { return jeGridCss; }
}, [257, "je-grid"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-grid"];
    components.forEach(tagName => { switch (tagName) {
        case "je-grid":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeGrid$1);
            }
            break;
    } });
}

const JeGrid = JeGrid$1;
const defineCustomElement = defineCustomElement$1;

export { JeGrid, defineCustomElement };
//# sourceMappingURL=je-grid.js.map

//# sourceMappingURL=je-grid.js.map