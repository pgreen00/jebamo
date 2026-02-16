import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-BE32ZzHI.js';
import { d as defineCustomElement$3 } from './p-CRZ_8E-L.js';
import { d as defineCustomElement$2 } from './p-DA7lkZbH.js';

const jeDetailsCss = ":host {\n  display: contents;\n\n  --content-open-padding: var(--je-spacing-md) 0 0 0;\n}\n\nbutton {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-family: inherit;\n  background-color: inherit;\n  color: inherit;\n  cursor: pointer;\n  display: block;\n}\n\nsummary {\n  font-size: var(--je-font-md)\n}\n\nje-icon {\n  transition: rotate 250ms ease-in-out;\n  &.open {\n    rotate: 90deg;\n  }\n}\n\n[part=content-container] {\n  box-sizing: border-box;\n  display: grid;\n  grid-template-rows: 0fr;\n  padding: 0;\n  opacity: 0;\n  transition: all 250ms ease-out;\n  &.open {\n    grid-template-rows: 1fr;\n    opacity: 1;\n    padding: var(--content-open-padding);\n  }\n}\n\n[part=content] {\n  overflow: hidden;\n}\n";

const JeDetails$1 = /*@__PURE__*/ proxyCustomElement(class JeDetails extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.expand = createEvent(this, "expand", 7);
        this.collapse = createEvent(this, "collapse", 7);
    }
    get el() { return this; }
    summary;
    open = false;
    iconToggle = false;
    iconSide = 'right';
    expand;
    collapse;
    watchOpen() {
        if (this.open) {
            this.expand.emit();
        }
        else {
            this.collapse.emit();
        }
    }
    render() {
        //const icon = <je-icon>chevron_right</je-icon>
        return (h(Host, { key: '0863fc61006fe8c1af7927a140e99021a61324b1' }, h("button", { key: 'a9d1531c34a3d616776af8ecc60b1e661c385ad6', part: 'toggle', onClick: () => this.open = !this.open }, h("je-toolbar", { key: 'bdcd124794cb81f1d083ab86c03e82b5d5b79abe' }, this.iconSide == 'left' && h("je-icon", { key: 'fad67e5b28b81c1cb1d7b009a192a2a476ed6745', class: { open: this.open } }, "chevron_right"), h("slot", { key: '06b983785664b36ad8dec84e81978ebfe626443b', name: 'start' }), h("slot", { key: 'c37074e51eb5213b938f88e606dfb953f8fcf994', name: "summary" }, this.summary && h("summary", { key: '6a7c6a0838cefd6873a723e989eb2cf1cd6774f6' }, this.summary)), h("slot", { key: '03e0731b0a6000ad3dfded52e361fa2bbe2a6b3a', name: 'end', slot: 'end' }), this.iconSide == 'right' && h("je-icon", { key: '735502c4d603cf7c2fd88f77af01f28d0798fa8c', slot: 'end', class: { open: this.open } }, "chevron_right"))), h("div", { key: '7ae1d269a6c1e376ac690e32e2e9d54b882bce98', part: 'content-container', class: { open: this.open } }, h("div", { key: 'a8f4612d4587750e275df8f00302607d3d4e485d', part: 'content' }, h("slot", { key: 'c6e8fdaf3085d1fc92e0c45bbd991aaee1be3cb8' })))));
    }
    static get watchers() { return {
        "open": ["watchOpen"]
    }; }
    static get style() { return jeDetailsCss; }
}, [257, "je-details", {
        "summary": [1],
        "open": [1028],
        "iconToggle": [4, "icon-toggle"],
        "iconSide": [1, "icon-side"]
    }, undefined, {
        "open": ["watchOpen"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-details", "je-icon", "je-toolbar"];
    components.forEach(tagName => { switch (tagName) {
        case "je-details":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeDetails$1);
            }
            break;
        case "je-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "je-toolbar":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const JeDetails = JeDetails$1;
const defineCustomElement = defineCustomElement$1;

export { JeDetails, defineCustomElement };
//# sourceMappingURL=je-details.js.map

//# sourceMappingURL=je-details.js.map