import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeTabCss = ":host{display:flex;position:relative;box-sizing:border-box;z-index:0;gap:var(--je-spacing-3xs);align-items:center;padding:var(--je-spacing-3xs) var(--je-spacing-2xs);user-select:none;-webkit-user-select:none;border-radius:var(--je-border-radius);transition:color 250ms ease;cursor:pointer}::slotted(*){cursor:pointer}:host(:state(--active)){color:var(--je-neutral-500)}";

const JeTab$1 = /*@__PURE__*/ proxyCustomElement(class JeTab extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.internals = this.attachInternals();
    }
    internals;
    get el() { return this; }
    value;
    active = false;
    componentDidRender() {
        this.internals.states.clear();
        if (this.active) {
            this.internals.states.add('--active');
        }
    }
    render() {
        return (h(Host, { key: '446b00cc5b1e9703ce3d50a6d04d55535a363b70' }, h("slot", { key: 'dbac47add9a636231b3b8081859ab0a6d4565083' })));
    }
    static get formAssociated() { return true; }
    static get style() { return jeTabCss; }
}, [321, "je-tab", {
        "value": [1],
        "active": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-tab"];
    components.forEach(tagName => { switch (tagName) {
        case "je-tab":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeTab$1);
            }
            break;
    } });
}

const JeTab = JeTab$1;
const defineCustomElement = defineCustomElement$1;

export { JeTab, defineCustomElement };
//# sourceMappingURL=je-tab.js.map

//# sourceMappingURL=je-tab.js.map