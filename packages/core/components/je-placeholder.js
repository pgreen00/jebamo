import { p as proxyCustomElement, H, h } from './p-BE32ZzHI.js';

const jePlaceholderCss = ":host{--background:#c7c7c7c5;--shimmer-color:#ffffff;border-radius:var(--je-radius-sm);display:block;box-sizing:border-box;background:var(--background);user-select:none;pointer-events:none;opacity:0.7}:host(:not([animated=false])){position:relative;background:linear-gradient(90deg, var(--background) 25%, var(--shimmer-color) 50%, var(--background) 75%);background-size:200% 100%;animation-duration:2.5s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:shimmer;animation-timing-function:linear}@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}";

const JePlaceholder$1 = /*@__PURE__*/ proxyCustomElement(class JePlaceholder extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    /**
     * Whether or not the component should have the animated "shimmer" effect
     */
    animated = true;
    render() {
        return h("slot", { key: 'b6c294e2104c186d8b167a5a629ae9cd75c23597' });
    }
    static get style() { return jePlaceholderCss; }
}, [257, "je-placeholder", {
        "animated": [516]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-placeholder"];
    components.forEach(tagName => { switch (tagName) {
        case "je-placeholder":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JePlaceholder$1);
            }
            break;
    } });
}

const JePlaceholder = JePlaceholder$1;
const defineCustomElement = defineCustomElement$1;

export { JePlaceholder, defineCustomElement };
//# sourceMappingURL=je-placeholder.js.map

//# sourceMappingURL=je-placeholder.js.map