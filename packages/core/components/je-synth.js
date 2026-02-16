import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeSynthCss = ":host{display:block}";

const JeSynth$1 = /*@__PURE__*/ proxyCustomElement(class JeSynth extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'c6f7e7ebac5f2ecdff9501c7b97da1369f9d19bf' }, h("slot", { key: 'df6e2c8c6afd9ef46368026ad40b0fb38352fd2e' })));
    }
    static get style() { return jeSynthCss; }
}, [257, "je-synth"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-synth"];
    components.forEach(tagName => { switch (tagName) {
        case "je-synth":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeSynth$1);
            }
            break;
    } });
}

const JeSynth = JeSynth$1;
const defineCustomElement = defineCustomElement$1;

export { JeSynth, defineCustomElement };
//# sourceMappingURL=je-synth.js.map

//# sourceMappingURL=je-synth.js.map