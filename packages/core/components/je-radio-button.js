import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeRadioButtonCss = ":host{display:flex;cursor:pointer;align-items:center;justify-content:center;height:2.5rem;flex-shrink:0;padding-block:0;padding-inline:var(--je-spacing-sm);margin:0;border:none;outline-color:var(--je-primary-200);outline-offset:2px;background-color:inherit;color:inherit;box-sizing:border-box;transition:all 75ms ease-in-out;user-select:none;-webkit-user-select:none}:host(:not(:first-of-type)){border:solid 1px light-dark(var(--je-neutral-300), var(--je-neutral-700));border-left:0}:host(:first-of-type){border:solid 1px light-dark(var(--je-neutral-300), var(--je-neutral-700))}:host([aria-checked=true]){background-color:light-dark(var(--je-primary-500), var(--je-primary-200));color:light-dark(var(--je-neutral-50), var(--je-neutral-900));border-color:light-dark(var(--je-primary-500), var(--je-primary-200))}:host(:first-of-type){border-top-left-radius:var(--je-radius-md);border-bottom-left-radius:var(--je-radius-md)}:host(:last-of-type){border-top-right-radius:var(--je-radius-md);border-bottom-right-radius:var(--je-radius-md)}";

const JeRadioButton$1 = /*@__PURE__*/ proxyCustomElement(class JeRadioButton extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    /** The value for this option that bw-card-group will compare against */
    value;
    /** Changes the styling of the card to indicate it is selected */
    selected = false;
    render() {
        return (h(Host, { key: '6dc0b97fd7e01694d26d40a64973eb6a98b7ebc3', role: 'radio', tabindex: -1, "aria-checked": this.selected ? 'true' : 'false' }, h("slot", { key: '8edc66ee1987e8f4a64c7e7219dd83fec4eecc94' })));
    }
    static get style() { return jeRadioButtonCss; }
}, [257, "je-radio-button", {
        "value": [1],
        "selected": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-radio-button"];
    components.forEach(tagName => { switch (tagName) {
        case "je-radio-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeRadioButton$1);
            }
            break;
    } });
}

const JeRadioButton = JeRadioButton$1;
const defineCustomElement = defineCustomElement$1;

export { JeRadioButton, defineCustomElement };
//# sourceMappingURL=je-radio-button.js.map

//# sourceMappingURL=je-radio-button.js.map