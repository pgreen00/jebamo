import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeCalendarCss = ":host{display:block}";

const JeCalendar$1 = /*@__PURE__*/ proxyCustomElement(class JeCalendar extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'afa6a7d692d0167425b6a7d35d5330d01c57e05e' }, h("slot", { key: '4b05be16b6fdafdf875ef80f5bde15676b44f946' })));
    }
    static get style() { return jeCalendarCss; }
}, [257, "je-calendar"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-calendar"];
    components.forEach(tagName => { switch (tagName) {
        case "je-calendar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeCalendar$1);
            }
            break;
    } });
}

const JeCalendar = JeCalendar$1;
const defineCustomElement = defineCustomElement$1;

export { JeCalendar, defineCustomElement };
//# sourceMappingURL=je-calendar.js.map

//# sourceMappingURL=je-calendar.js.map