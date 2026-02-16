import { p as proxyCustomElement, H, c as createEvent, h, f as forceUpdate, d as Host } from './p-BE32ZzHI.js';

const jeTabsCss = ":host([mode=segment]) {\n  position: relative;\n  display: flex;\n  width: fit-content;\n  padding: var(--je-spacing-3xs) var(--je-spacing-2xs);\n  gap: var(--je-spacing-md);\n  border-radius: var(--je-radius-md);\n  box-sizing: border-box;\n  text-transform: uppercase;\n\tletter-spacing: 1px;\n  font-weight: var(--je-font-semi-bold);\n\n  [part=indicator] {\n    position: absolute;\n    left: 0;\n    border-radius: var(--je-radius-md);\n    background-color: var(--je-neutral-500);\n    z-index: 0;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), width 250ms ease;\n    bottom: 0;\n  }\n}\n\n:host([mode=pill]) {\n  position: relative;\n  display: flex;\n  width: fit-content;\n  padding: var(--je-spacing-3xs) var(--je-spacing-2xs);\n  gap: var(--je-spacing-md);\n  border-radius: var(--je-radius-md);\n  background-color: var(--je-neutral-500);\n  box-sizing: border-box;\n\n  [part=indicator] {\n    position: absolute;\n    left: 0;\n    border-radius: var(--je-radius-md);\n    z-index: 0;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), width 250ms ease;\n  }\n}\n\n:host([mode=mobile]) {\n  position: relative;\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  padding: var(--je-spacing-3xs) var(--je-spacing-2xs);\n  gap: var(--je-spacing-md);\n  border-radius: var(--je-radius-md);\n  color: var(--je-neutral-500);\n  box-sizing: border-box;\n  font-weight: var(--je-font-semi-bold);\n\n  [part=indicator] {\n    position: absolute;\n    left: 0;\n    border-radius: var(--je-radius-md);\n    background-color: var(--je-primary-500);\n    z-index: 0;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), width 250ms ease;\n    top: 0;\n  }\n\n  ::slotted(je-tab) {\n    flex: 1;\n    justify-content: center;\n    flex-direction: column;\n  }\n\n  ::slotted(je-tab:state(--active)) {\n    color: var(--je-primary-500);\n  }\n}\n";

const JeTabs$1 = /*@__PURE__*/ proxyCustomElement(class JeTabs extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.valueChange = createEvent(this, "valueChange", 7);
    }
    get el() { return this; }
    mode = 'segment';
    value;
    valueChange;
    componentWillRender() {
        const tabs = this.el.querySelectorAll('je-tab');
        for (let t of tabs)
            t.active = (t.value ?? t.textContent) === this.value;
    }
    onClick(ev) {
        if (ev.target instanceof H) {
            const tab = ev.target.closest('je-tab');
            if (tab) {
                this.value = tab.value ?? tab.textContent;
            }
        }
    }
    handleValueChange() {
        this.valueChange.emit(this.value);
    }
    getBackgroundStyle() {
        const activeTab = Array.from(this.el.querySelectorAll('je-tab')).find(t => t.active);
        if (!activeTab)
            return {};
        const { width, left, height } = activeTab.getBoundingClientRect();
        const hostRect = this.el.getBoundingClientRect();
        const xOffset = left - hostRect.left;
        return {
            width: `${width}px`,
            transform: `translateX(${xOffset}px)`,
            height: `${this.mode == 'pill' ? height : '1'}px`
        };
    }
    render() {
        return (h(Host, { key: 'b14f180838761e96a4a276abd37a1809cc65950c' }, h("div", { key: 'f85edbb94d57a47fcf341050c089de5e549c39e1', part: 'indicator', style: this.getBackgroundStyle() }), h("slot", { key: 'd2088c4f99b1c24357a456c542f690344109d46c', onSlotchange: () => forceUpdate(this.el) })));
    }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
    static get style() { return jeTabsCss; }
}, [257, "je-tabs", {
        "mode": [513],
        "value": [1025]
    }, [[0, "click", "onClick"]], {
        "value": ["handleValueChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-tabs"];
    components.forEach(tagName => { switch (tagName) {
        case "je-tabs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeTabs$1);
            }
            break;
    } });
}

const JeTabs = JeTabs$1;
const defineCustomElement = defineCustomElement$1;

export { JeTabs, defineCustomElement };
//# sourceMappingURL=je-tabs.js.map

//# sourceMappingURL=je-tabs.js.map