import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeMidiCss = ":host{display:block}";

const JeMidi$1 = /*@__PURE__*/ proxyCustomElement(class JeMidi extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'a111c2b7cb3cd925e686ed1acf2937f1b421627d' }, h("slot", { key: 'e00db63abf657e0ce83e4cd49c5f4557423aa8fd' })));
    }
    static get style() { return jeMidiCss; }
}, [257, "je-midi"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-midi"];
    components.forEach(tagName => { switch (tagName) {
        case "je-midi":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeMidi$1);
            }
            break;
    } });
}

const JeMidi = JeMidi$1;
const defineCustomElement = defineCustomElement$1;

export { JeMidi, defineCustomElement };
//# sourceMappingURL=je-midi.js.map

//# sourceMappingURL=je-midi.js.map