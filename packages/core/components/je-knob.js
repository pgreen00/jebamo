import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeKnobCss = ":host{display:block}";

const JeKnob$1 = /*@__PURE__*/ proxyCustomElement(class JeKnob extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '4dbf3b4bb007e75057dfc825eb53af0c70f42186' }, h("slot", { key: '329a2ad5843be257efb44b89fc2674aa3d8a75b2' })));
    }
    static get style() { return jeKnobCss; }
}, [257, "je-knob"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-knob"];
    components.forEach(tagName => { switch (tagName) {
        case "je-knob":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeKnob$1);
            }
            break;
    } });
}

const JeKnob = JeKnob$1;
const defineCustomElement = defineCustomElement$1;

export { JeKnob, defineCustomElement };
//# sourceMappingURL=je-knob.js.map

//# sourceMappingURL=je-knob.js.map