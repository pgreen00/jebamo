import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeOptionCss = ":host{display:flex;align-items:center;cursor:pointer;box-sizing:border-box;padding-inline:var(--je-spacing-sm);transition:background-color 75ms ease-in-out;user-select:none;-webkit-user-select:none}:host([aria-disabled=true]){cursor:not-allowed;opacity:0.6}:host(:hover:not([aria-disabled=true])),:host([aria-selected=true]){background-color:light-dark(var(--je-primary-100), var(--je-neutral-800))}";

const JeOption = /*@__PURE__*/ proxyCustomElement(class JeOption extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    value;
    selected = false;
    disabled = false;
    onClick(ev) {
        if (this.disabled) {
            ev.stopImmediatePropagation();
        }
    }
    onKeyDown(ev) {
        if (this.disabled) {
            ev.stopImmediatePropagation();
        }
    }
    render() {
        return (h(Host, { key: 'dc7d8ea86d0f53a7567737a82ca0f95136c2efba', role: 'option', "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', tabindex: this.disabled ? -1 : 0 }, h("slot", { key: '78ec90f9228df1b9f113e015b51508979250903e' })));
    }
    static get style() { return jeOptionCss; }
}, [257, "je-option", {
        "value": [8],
        "selected": [4],
        "disabled": [4]
    }, [[2, "click", "onClick"], [2, "keydown", "onKeyDown"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-option"];
    components.forEach(tagName => { switch (tagName) {
        case "je-option":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeOption);
            }
            break;
    } });
}

export { JeOption as J, defineCustomElement as d };
//# sourceMappingURL=p-C2BoH8gF.js.map

//# sourceMappingURL=p-C2BoH8gF.js.map