import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeRangeCss = ":host{display:block}";

const JeRange$1 = /*@__PURE__*/ proxyCustomElement(class JeRange extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '0932ab372f3eaf306535d466fb35691a0650b782' }, h("slot", { key: '38070578c64ffe4a1daa72155f927a048c7ce02d' })));
    }
    static get style() { return jeRangeCss; }
}, [257, "je-range"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-range"];
    components.forEach(tagName => { switch (tagName) {
        case "je-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeRange$1);
            }
            break;
    } });
}

const JeRange = JeRange$1;
const defineCustomElement = defineCustomElement$1;

export { JeRange, defineCustomElement };
//# sourceMappingURL=je-range.js.map

//# sourceMappingURL=je-range.js.map