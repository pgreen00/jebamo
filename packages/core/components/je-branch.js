import { h, p as proxyCustomElement, H, F as Fragment, f as forceUpdate, d as Host } from './p-BE32ZzHI.js';

const jeBranchCss = ":host {\n  display: block;\n  box-sizing: border-box;\n  position: relative;\n\n  --selected-background: light-dark(var(--je-primary-50), var(--je-neutral-800));\n  --selected-color: light-dark(var(--je-primary-500), var(--je-primary-200));\n  --indentation-color: light-dark(var(--je-neutral-400), var(--je-neutral-700));\n}\n\n[part=chevron] {\n  height: 16px;\n  width: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: light-dark(var(--je-neutral-800), var(--je-neutral-200));\n  transition: rotate 250ms ease;\n  rotate: 270deg;\n  &.open {\n    rotate: 360deg;\n  }\n}\n\n[part=multi-icon] {\n  box-sizing: border-box;\n  display: flex;\n  height: 16px;\n  width: 16px;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: solid 1px var(--selected-color);\n  border-radius: var(--je-radius-sm);\n  color: var(--selected-color);\n  &.selected {\n    background-color: var(--selected-color);\n    color: var(--selected-background);\n  }\n}\n\n.end-container {\n  display: contents;\n}\n\n[part=content-container] {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  border-radius: var(--je-radius-md);\n  overflow: hidden;\n  background-color: transparent;\n  color: inherit;\n  width: 100%;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  cursor: pointer;\n  height: 2.25rem;\n  padding-right: 1.25rem;\n  gap: var(--je-spacing-2xs);\n  user-select: none;\n  -webkit-user-select: none;\n  z-index: 1;\n  transition: all 75ms ease-in-out;\n  outline-offset: -6px;\n  outline-color: var(--je-primary-400);\n  --level: calc(1em / var(--je-font-md));\n\n  &:not(.parent) {\n    padding-left: calc(1em + var(--level) * var(--je-spacing-2xs));\n  }\n\n  &.parent.child {\n    padding-left: calc(1em - 16px - var(--je-spacing-2xs) + var(--level) * var(--je-spacing-2xs));\n  }\n\n  &:hover,\n  &.selected:not(.multiple) {\n    background-color: var(--selected-background);\n  }\n\n  &.selected:not(.multiple) {\n    color: var(--selected-color);\n  }\n}\n\nbutton, a {\n  box-sizing: border-box;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background-color: inherit;\n  color: inherit;\n  font-family: inherit;\n  cursor: inherit;\n  text-decoration: none;\n  font-size: var(--je-font-md);\n  font-weight: var(--je-font-regular);\n  line-height: var(--je-font-md);\n  height: 100%;\n  gap: var(--je-spacing-2xs);\n}\n\n[part=inner-branch-container] {\n  overflow: hidden;\n  font-size: calc(1em + var(--je-font-md));\n}\n\n[part=branch-container] {\n  position: relative;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-rows: 0fr;\n  opacity: 0;\n  transition: all 250ms ease-out;\n  --level: calc(1em / var(--je-font-md));\n\n  &.indentation::before {\n    left: calc(calc(var(--level) - 1) * calc(16px + var(--je-spacing-2xs)) + 8px);\n    display: block;\n    content: \"\";\n    position: absolute;\n    background-color: var(--indentation-color);\n    opacity: 0;\n    width: 1px;\n    transition: opacity 250ms ease-in-out;\n    z-index: 2;\n  }\n\n  &.open {\n    opacity: 1;\n    grid-template-rows: 1fr;\n\n    &.indentation::before {\n      opacity: 1;\n      height: 100%;\n    }\n  }\n}\n";

const JeBranch$1 = /*@__PURE__*/ proxyCustomElement(class JeBranch extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    hasChildren = false;
    isChild = false;
    get element() { return this; }
    selection;
    indentation = false;
    open = false;
    value;
    label;
    selected = false;
    href;
    componentWillRender() {
        this.hasChildren = this.element.querySelector('je-branch') !== null;
        this.isChild = this.element.parentElement.closest('je-branch') != null;
    }
    async isLeaf() {
        return !this.hasChildren;
    }
    handleIconClick = (ev) => {
        if (this.selection != 'leaf') {
            ev.stopPropagation();
            this.open = !this.open;
        }
    };
    checkboxPath() {
        return h("path", { d: this.selected ? 'M20 6 9 17l-5-5' : 'M5 12h14' });
    }
    render() {
        const innerButton = (h(Fragment, { key: 'ab5ead3ef9825d4301885e90c52ecf316470aa31' }, this.selection === 'multiple' && (h("div", { key: 'a2e7ba2dadad1be519f9c7ea07813b22ee09a92d', part: 'multi-icon', class: { selected: this.selected !== false } }, this.selected !== false && (h("svg", { key: 'c1243038775414dabc35f3c02f9cb0dd764a831d', xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, this.checkboxPath())))), h("slot", { key: 'c4ef61bf801c7eb1fd333c6d8cc2aab5a2751674', name: "label" }, this.label && h("span", { key: '84a9d49edf651f1dafc504e811742d92f029d141' }, this.label))));
        return (h(Host, { key: '5f824762eb23d0116b14b853e95e14b6e68a9829' }, h("div", { key: '078f1b8f87574c6573226282795f0c6282ec689b', part: 'content-container', class: { selected: this.selected, [this.selection]: true, child: this.isChild, parent: this.hasChildren } }, this.hasChildren && (h("div", { key: '0010f12377ad92a54d143f4af565e5d716ad0d04', part: 'chevron', class: { open: this.open }, onClickCapture: this.handleIconClick }, chevron)), this.href ? h("a", { href: this.href }, innerButton) : h("button", { type: 'button' }, innerButton), h("div", { key: '015b6c911366739a2e1f3f7fee862a76b3360b60', class: 'end-container', onClick: ev => ev.stopPropagation() }, h("slot", { key: 'eb0707c1bb4d218e41117d61c56cae5fcd53accc', name: 'end' }))), h("div", { key: 'fe3d20fb41e68825f38bc9409effd491e8766421', class: { open: this.open, indentation: this.indentation }, part: "branch-container" }, h("div", { key: 'e48758b59a2e2679a41dc27c1818707589c9bd5f', part: 'inner-branch-container' }, h("slot", { key: '7e649996039e34b5b913517f0a6ff626b4b6414b', onSlotchange: () => forceUpdate(this.element) })))));
    }
    static get delegatesFocus() { return true; }
    static get style() { return jeBranchCss; }
}, [273, "je-branch", {
        "selection": [1],
        "indentation": [4],
        "open": [1028],
        "value": [1],
        "label": [1],
        "selected": [4],
        "href": [1],
        "isLeaf": [64]
    }]);
const chevron = h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, h("path", { d: "m4 6 4 4 4-4" }));
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-branch"];
    components.forEach(tagName => { switch (tagName) {
        case "je-branch":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeBranch$1);
            }
            break;
    } });
}

const JeBranch = JeBranch$1;
const defineCustomElement = defineCustomElement$1;

export { JeBranch, defineCustomElement };
//# sourceMappingURL=je-branch.js.map

//# sourceMappingURL=je-branch.js.map