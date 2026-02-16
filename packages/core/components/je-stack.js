import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeStackCss = ":host{display:block}";

const JeStack$1 = /*@__PURE__*/ proxyCustomElement(class JeStack extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '58c9ad930812f3c018641c1df54398bc34601e7a' }, h("slot", { key: '4c73e92e9f068ffa2d0a9c761e78aaa0bb1bc291' })));
    }
    static get style() { return jeStackCss; }
}, [257, "je-stack"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-stack"];
    components.forEach(tagName => { switch (tagName) {
        case "je-stack":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeStack$1);
            }
            break;
    } });
}

const JeStack = JeStack$1;
const defineCustomElement = defineCustomElement$1;

export { JeStack, defineCustomElement };
//# sourceMappingURL=je-stack.js.map

//# sourceMappingURL=je-stack.js.map