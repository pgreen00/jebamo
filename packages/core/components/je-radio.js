import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';
import { d as defineCustomElement$2 } from './p-CRZ_8E-L.js';

const jeRadioCss = ":host{display:flex;align-items:center;gap:var(--je-spacing-2xs);cursor:pointer;-webkit-user-select:none;user-select:none;outline-color:var(--je-primary-200)}je-icon{color:light-dark(var(--je-primary-500), var(--je-primary-200))}";

const JeRadio$1 = /*@__PURE__*/ proxyCustomElement(class JeRadio extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    get el() { return this; }
    /**
     * The value of this option and the radio group will compare against
     */
    value;
    /**
     * If the option is currently selected
     */
    selected;
    render() {
        return (h(Host, { key: '34ffef53f02689832c43856dd5fce22983b67a4e', role: 'radio', tabindex: -1, "aria-checked": this.selected ? 'true' : 'false' }, h("je-icon", { key: '46272be96932b41d527b59aeb67d7270adb99d5f', "aria-hidden": 'true' }, this.selected ? 'radio_button_checked' : 'radio_button_unchecked'), h("slot", { key: '75982d4201f76b334cd87107f39a65dcfc2ff86a' })));
    }
    static get style() { return jeRadioCss; }
}, [257, "je-radio", {
        "value": [8],
        "selected": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-radio", "je-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "je-radio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeRadio$1);
            }
            break;
        case "je-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const JeRadio = JeRadio$1;
const defineCustomElement = defineCustomElement$1;

export { JeRadio, defineCustomElement };
//# sourceMappingURL=je-radio.js.map

//# sourceMappingURL=je-radio.js.map