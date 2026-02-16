import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeCardCss = ":host{display:grid}";

const JeCard$1 = /*@__PURE__*/ proxyCustomElement(class JeCard extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    color;
    button;
    render() {
        return (h(Host, { key: '0b593c2fe7408971fa51d2ac267e0083d110c70e' }, h("slot", { key: '4c4266b99e2327d542f97dda6ba9f56b892a8922', name: 'media' }), h("slot", { key: '0ba9fd90bd63eb13f0c75963e90be73beeb905f7', name: 'header' }), h("div", { key: '90fa1be5bb3e6c36257e051c844f4207e086c588', class: 'container' }, h("slot", { key: '55702a5af6331b74f57a6f9c5999882111a1c6fc' }), h("slot", { key: 'c5aadf1024b6fd35e24628a6c72682445f723ed3', name: 'footer' }))));
    }
    static get style() { return jeCardCss; }
}, [257, "je-card", {
        "color": [513],
        "button": [516]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-card"];
    components.forEach(tagName => { switch (tagName) {
        case "je-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeCard$1);
            }
            break;
    } });
}

const JeCard = JeCard$1;
const defineCustomElement = defineCustomElement$1;

export { JeCard, defineCustomElement };
//# sourceMappingURL=je-card.js.map

//# sourceMappingURL=je-card.js.map