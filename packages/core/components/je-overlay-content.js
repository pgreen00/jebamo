import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';
import { d as defineCustomElement$5 } from './p-Bq6w2KBv.js';
import { d as defineCustomElement$4 } from './p-CRZ_8E-L.js';
import { d as defineCustomElement$3 } from './p-C_N6ZFok.js';
import { d as defineCustomElement$2 } from './p-DA7lkZbH.js';

const jeOverlayContentCss = ":host {\n  display: contents;\n  --padding: var(--je-spacing-xs) var(--je-spacing-lg);\n}\n\n.end {\n  display: contents;\n}\n\nh2 {\n  font-family: inherit;\n  font-size: var(--je-font-xl);\n  font-weight: var(--je-font-semi-bold);\n  margin-block-start: 0;\n  margin-block-end: 0;\n  margin-inline-start: 0;\n  margin-inline-end: 0;\n}\n\nheader {\n  display: contents;\n\n  je-toolbar {\n    flex-shrink: 0;\n    position: sticky;\n    top: var(--drag-height, 0);\n    z-index: 1;\n    padding: var(--padding);\n    border-bottom: solid 1px canvastext;\n  }\n}\n\n::slotted([slot=body]) {\n  padding: var(--padding);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  display: flex;\n    flex-shrink: 0;\n  justify-content: flex-end;\n  align-items: center;\n  position: sticky;\n  bottom: 0;\n  z-index: 1;\n  padding: var(--padding);\n  gap: var(--je-spacing-sm);\n  border-top: solid 1px canvastext;\n}\n\n";

const JeOverlayContent$1 = /*@__PURE__*/ proxyCustomElement(class JeOverlayContent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    get el() { return this; }
    label;
    closable = true;
    get overlay() {
        return this.el.closest('je-overlay');
    }
    render() {
        return (h(Host, { key: '6c7dae8bcdb7f5af30e2476e8d18adf6e7c5e3a9' }, h("header", { key: '7f04f84a5147e652fce18d9556c61440b6d3eaa0' }, h("je-toolbar", { key: '26358d1114a04b6f1183577ce9643974fa2925c2' }, h("slot", { key: '23065d55210463f12557f093ff7a514652da44ff', name: "label" }, this.label && h("h2", { key: '25ff61e722baad491b872fca28e2748ffb2e6130', part: 'label' }, this.label)), h("div", { key: 'ceb0179148b99f3d3867c45539c330189a2247c7', class: "end", slot: 'end' }, h("slot", { key: '7ec4a1b2efb5787d0c19918af8c3c94983b21291', name: 'actions' }), this.closable && h("je-button", { key: '500c339bfa920ee14dd6a39725f6f74c9a942d5d', size: 'lg', onClick: () => this.overlay.hide() }, h("je-icon", { key: 'd9d481a08e0cfa74fc4ccf7e8dcbcf90bf3d506e' }, "close"))))), h("slot", { key: '0ed46012d5c468be1e9fff7e76eebe909ba0f9aa', name: "body" }), h("footer", { key: 'e517806948bc84930a04902ff2c050d8da4a468c' }, h("slot", { key: '235e14a445afd212050626bb85a5972c112c4cc9', name: 'footer' }))));
    }
    static get style() { return jeOverlayContentCss; }
}, [257, "je-overlay-content", {
        "label": [1],
        "closable": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-overlay-content", "je-button", "je-icon", "je-loading", "je-toolbar"];
    components.forEach(tagName => { switch (tagName) {
        case "je-overlay-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeOverlayContent$1);
            }
            break;
        case "je-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "je-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "je-loading":
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

const JeOverlayContent = JeOverlayContent$1;
const defineCustomElement = defineCustomElement$1;

export { JeOverlayContent, defineCustomElement };
//# sourceMappingURL=je-overlay-content.js.map

//# sourceMappingURL=je-overlay-content.js.map