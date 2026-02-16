import { p as proxyCustomElement, H, h } from './p-BE32ZzHI.js';

const jeBreadcrumbCss = ":host,\na {\n  display: none;\n}\n\n:host(.visible) {\n  display: contents;\n\n  a {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n  }\n}\n\na:any-link {\n  color: inherit;\n  text-decoration-line: none;\n}\n";

const JeBreadcrumb$1 = /*@__PURE__*/ proxyCustomElement(class JeBreadcrumb extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h("a", { key: 'bff6fb6f56778c29bfce554a56ef6ffcfeb48b25' }, h("slot", { key: '483c331f8ca2057d1f72112c0000c30ae88e227b' })));
    }
    static get style() { return jeBreadcrumbCss; }
}, [257, "je-breadcrumb"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-breadcrumb"];
    components.forEach(tagName => { switch (tagName) {
        case "je-breadcrumb":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeBreadcrumb$1);
            }
            break;
    } });
}

const JeBreadcrumb = JeBreadcrumb$1;
const defineCustomElement = defineCustomElement$1;

export { JeBreadcrumb, defineCustomElement };
//# sourceMappingURL=je-breadcrumb.js.map

//# sourceMappingURL=je-breadcrumb.js.map