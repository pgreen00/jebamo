import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeDiscardFormCss = ":host{display:block}";

const JeDiscardForm$1 = /*@__PURE__*/ proxyCustomElement(class JeDiscardForm extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '5aa4cb90b4d3c160e801fe171c050d8b25baef34' }, h("slot", { key: '395229af4d9aea1ea978b1f0f7cc83e1444e596c' })));
    }
    static get style() { return jeDiscardFormCss; }
}, [257, "je-discard-form"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-discard-form"];
    components.forEach(tagName => { switch (tagName) {
        case "je-discard-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeDiscardForm$1);
            }
            break;
    } });
}

const JeDiscardForm = JeDiscardForm$1;
const defineCustomElement = defineCustomElement$1;

export { JeDiscardForm, defineCustomElement };
//# sourceMappingURL=je-discard-form.js.map

//# sourceMappingURL=je-discard-form.js.map