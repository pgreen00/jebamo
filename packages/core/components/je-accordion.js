import { p as proxyCustomElement, H, h } from './p-BE32ZzHI.js';

const jeAccordionCss = ":host{display:flex;flex-direction:column}";

const JeAccordion$1 = /*@__PURE__*/ proxyCustomElement(class JeAccordion extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    get el() { return this; }
    onExpand(ev) {
        const { target } = ev;
        const sections = Array.from(this.el.querySelectorAll('je-details'));
        sections.forEach(section => {
            if (section !== target) {
                section.open = false;
            }
        });
    }
    onKeydown(ev) {
        if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
            ev.preventDefault();
            const sections = Array.from(this.el.querySelectorAll('je-details'));
            const index = sections.indexOf(ev.target);
            const nextIndex = ev.key === 'ArrowDown' ? index + 1 : index - 1;
            if (nextIndex >= 0 && nextIndex < sections.length) {
                sections[nextIndex].focus();
            }
        }
        if (ev.key === 'Home') {
            ev.preventDefault();
            const sections = Array.from(this.el.querySelectorAll('je-details'));
            sections[0].focus();
        }
        if (ev.key === 'End') {
            ev.preventDefault();
            const sections = Array.from(this.el.querySelectorAll('je-details'));
            sections[sections.length - 1].focus();
        }
    }
    render() {
        return h("slot", { key: '4dcffc9d8819c631f92c55c9614801dc6a3f6fec' });
    }
    static get style() { return jeAccordionCss; }
}, [257, "je-accordion", undefined, [[0, "expand", "onExpand"], [0, "keydown", "onKeydown"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-accordion"];
    components.forEach(tagName => { switch (tagName) {
        case "je-accordion":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeAccordion$1);
            }
            break;
    } });
}

const JeAccordion = JeAccordion$1;
const defineCustomElement = defineCustomElement$1;

export { JeAccordion, defineCustomElement };
//# sourceMappingURL=je-accordion.js.map

//# sourceMappingURL=je-accordion.js.map