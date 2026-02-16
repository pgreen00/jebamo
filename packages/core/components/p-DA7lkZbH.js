import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeToolbarCss = ":host{display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;width:100%;--gap:var(--je-spacing-sm)}[part=main-container],[part=end-container]{display:flex;align-items:center;gap:var(--gap)}[part=main-container]{justify-content:flex-start}[part=end-container]{justify-content:flex-end}";

const JeToolbar = /*@__PURE__*/ proxyCustomElement(class JeToolbar extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'd3db997b3987f55d132c08bfac748ad38101fb21' }, h("div", { key: 'cbdd734bcafb0d98b47a8e3de5fa008ee3a218d9', part: 'main-container' }, h("slot", { key: '17fb6d2d33efa5417f3edf41f417183a509b6ec8', name: 'start' }), h("slot", { key: '2d099f76b2c92cb562b0752ca6e5f7fb30b2b09b' })), h("div", { key: '42a2f0dd8c391f48099085a6a5bc63ee7c70645f', part: 'end-container' }, h("slot", { key: 'fa85e6c502c214583941084a7d12193a5e2f6ed9', name: 'end' }))));
    }
    static get style() { return jeToolbarCss; }
}, [257, "je-toolbar"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-toolbar"];
    components.forEach(tagName => { switch (tagName) {
        case "je-toolbar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeToolbar);
            }
            break;
    } });
}

export { JeToolbar as J, defineCustomElement as d };
//# sourceMappingURL=p-DA7lkZbH.js.map

//# sourceMappingURL=p-DA7lkZbH.js.map