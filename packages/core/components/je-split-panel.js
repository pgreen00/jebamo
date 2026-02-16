import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeSplitPanelCss = ":host{display:block}";

const JeSplitPanel$1 = /*@__PURE__*/ proxyCustomElement(class JeSplitPanel extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'ddea947eaa043b5df929effbfe4be503cc4ce80a' }, h("slot", { key: '83df9aa4570e3f70729463229ea642acb0559ffd' })));
    }
    static get style() { return jeSplitPanelCss; }
}, [257, "je-split-panel"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-split-panel"];
    components.forEach(tagName => { switch (tagName) {
        case "je-split-panel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeSplitPanel$1);
            }
            break;
    } });
}

const JeSplitPanel = JeSplitPanel$1;
const defineCustomElement = defineCustomElement$1;

export { JeSplitPanel, defineCustomElement };
//# sourceMappingURL=je-split-panel.js.map

//# sourceMappingURL=je-split-panel.js.map