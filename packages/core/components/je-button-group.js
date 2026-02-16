import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeButtonGroupCss = "je-button-group {\n  display: flex;\n  width: fit-content;\n\n  & > je-button,\n  & > * > je-button {\n    &[color][fill=solid]:not(.__last)::part(inner-button) {\n      border-right-color: currentColor;\n    }\n\n    &::part(inner-button) {\n      border-radius: 0;\n      border-left: none;\n    }\n\n    &.__first::part(inner-button) {\n      border-left: solid 1px var(--border-color, transparent);\n      border-top-left-radius: var(--je-radius-md);\n      border-bottom-left-radius: var(--je-radius-md);\n    }\n\n    &.__last::part(inner-button) {\n      border-top-right-radius: var(--je-radius-md);\n      border-bottom-right-radius: var(--je-radius-md);\n    }\n  }\n}\n\n\n";

const JeButtonGroup$1 = /*@__PURE__*/ proxyCustomElement(class JeButtonGroup extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
    componentDidLoad() {
        const buttons = Array.from(this.el.querySelectorAll(':scope > je-button, :scope > * > je-button'));
        buttons.at(0)?.classList.add('__first');
        buttons.at(-1)?.classList.add('__last');
    }
    render() {
        return (h(Host, { key: '47820fa589ca5d388206fa2f9793737869882f12' }));
    }
    static get style() { return jeButtonGroupCss; }
}, [256, "je-button-group"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-button-group"];
    components.forEach(tagName => { switch (tagName) {
        case "je-button-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeButtonGroup$1);
            }
            break;
    } });
}

const JeButtonGroup = JeButtonGroup$1;
const defineCustomElement = defineCustomElement$1;

export { JeButtonGroup, defineCustomElement };
//# sourceMappingURL=je-button-group.js.map

//# sourceMappingURL=je-button-group.js.map