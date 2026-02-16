import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jePillCss = ":host{display:inline-flex}";

const JePill = /*@__PURE__*/ proxyCustomElement(class JePill extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    get el() { return this; }
    outline = false;
    onClick(ev) {
        if (this.el.role == 'button' && (ev.key == ' ' || ev.key == 'Enter')) {
            this.el.click();
        }
    }
    render() {
        return (h(Host, { key: '08205beb5e25095781fa540442f47125dff8b0a5' }, h("slot", { key: 'e33266029f5e301686a975788e410543304bef31' })));
    }
    static get style() { return jePillCss; }
}, [257, "je-pill", {
        "outline": [516]
    }, [[2, "keydown", "onClick"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-pill"];
    components.forEach(tagName => { switch (tagName) {
        case "je-pill":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JePill);
            }
            break;
    } });
}

export { JePill as J, defineCustomElement as d };
//# sourceMappingURL=p-DreSRLyw.js.map

//# sourceMappingURL=p-DreSRLyw.js.map