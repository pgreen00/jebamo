import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeListCss = ":host{display:block}";

const JeList$1 = /*@__PURE__*/ proxyCustomElement(class JeList extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'd3fff3dea321e3e0c80cddbe12398bf26c966c8f' }, h("slot", { key: 'aed59e7ba64843c8043dee79c9603c5751162a53' })));
    }
    static get style() { return jeListCss; }
}, [257, "je-list"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-list"];
    components.forEach(tagName => { switch (tagName) {
        case "je-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeList$1);
            }
            break;
    } });
}

const JeList = JeList$1;
const defineCustomElement = defineCustomElement$1;

export { JeList, defineCustomElement };
//# sourceMappingURL=je-list.js.map

//# sourceMappingURL=je-list.js.map