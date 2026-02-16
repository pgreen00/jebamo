import { p as proxyCustomElement, H, c as createEvent, h, f as forceUpdate, d as Host } from './p-BE32ZzHI.js';
import { d as defineCustomElement$6 } from './p-CRZ_8E-L.js';
import { d as defineCustomElement$5 } from './p-HBw7xUgW.js';
import { d as defineCustomElement$4 } from './p-MWdJxJ50.js';
import { d as defineCustomElement$3 } from './p-C2BoH8gF.js';
import { d as defineCustomElement$2 } from './p-BjkI2DXD.js';

const jeSelectCss = ":host {\n  display: flex;\n  flex-direction: column;\n  gap: var(--je-spacing-3xs);\n}\n\n:host(:focus) div[part=container] {\n  border-color: light-dark(var(--je-primary-500), var(--je-primary-200));\n}\n\n:host(:state(--user-invalid)) div[part=container] {\n  border-color: light-dark(var(--je-danger-400), var(--je-danger-300));\n}\n\nje-note {\n  margin-left: var(--je-spacing-xs);\n}\n\nbutton {\n  font-family: inherit;\n  box-sizing: border-box;\n  display: flex;\n  cursor: pointer;\n  gap: var(--je-spacing-xs);\n  border-radius: var(--je-radius-md);\n  border: solid 1px light-dark(var(--je-neutral-500), var(--je-neutral-400));\n  align-items: center;\n  background-color: light-dark(var(--je-primary-50), var(--je-primary-950));\n  color: light-dark(var(--je-neutral-900), var(--je-neutral-50));\n  padding-inline: var(--je-spacing-xs);\n  padding-block: 0;\n  margin: 0;\n  &.sm {\n    height: 2.5rem;\n  }\n  &.md {\n    height: 3rem;\n  }\n  &.lg {\n    height: 3.5rem;\n  }\n  &:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n}\n\n[part=content] {\n  display: flex;\n  flex: 1;\n  font-size: var(--je-font-md);\n  font-weight: var(--je-font-light);\n  color: light-dark(var(--je-neutral-950), var(--je-neutral-50));\n\n  &.placeholder {\n    color: light-dark(var(--je-neutral-700), var(--je-neutral-600));\n    font-size: var(--je-font-md);\n    font-weight: var(--je-font-light);\n  }\n}\n\nje-icon {\n  transition: rotate 300ms ease-in-out;\n  &.open {\n    rotate: 180deg;\n  }\n}\n\nje-popover {\n  --padding: 0;\n}\n";

const JeSelect$1 = /*@__PURE__*/ proxyCustomElement(class JeSelect extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.valueChange = createEvent(this, "valueChange", 7);
        this.internals = this.attachInternals();
    }
    get hostEl() { return this; }
    internals;
    open = false;
    content;
    value;
    label;
    disabled = false;
    required = false;
    placeholder;
    note;
    multiple = false;
    originalValue;
    options;
    size = 'md';
    valueChange;
    componentWillLoad() {
        if (this.originalValue === undefined)
            this.originalValue = this.value;
    }
    componentDidLoad() {
        this.internals.setFormValue(this.value);
    }
    componentWillRender() {
        this.getOptions().forEach(option => option.selected = option.value === this.value);
    }
    componentDidRender() {
        this.internals.ariaLabel = this.label || this.hostEl.querySelector('[slot=label]')?.textContent;
        this.internals.ariaDescription = this.note || this.hostEl.querySelector('[slot=note]')?.textContent;
        this.internals.ariaInvalid = this.internals.validity.valid ? 'true' : 'false';
    }
    getOptions() {
        return Array.from(this.hostEl.querySelectorAll('je-option'));
    }
    isOption(target) {
        return target instanceof H && (target.tagName == 'JE-OPTION');
    }
    onClick(ev) {
        const { target } = ev;
        if (this.isOption(target)) {
            this.value = target.value;
            this.valueChange.emit(this.value);
            this.content = target.textContent;
        }
    }
    render() {
        return (h(Host, { key: 'da9fbfbb091dd9cab819a9caa4d7203a5304f755', role: 'listbox' }, h("je-popover", { key: '58a3755dd71f170afbd75cff9eddde89ddbec143', arrow: false, placement: 'bottom', matchWidth: true, dismissOnClick: !this.multiple, onWillPresent: () => this.open = true, onWillDismiss: () => this.open = false }, h("button", { key: '61c73108488df80fd94cc436438c542a34b114c9', class: this.size, disabled: this.disabled, slot: 'trigger', tabindex: 0, type: 'button' }, h("slot", { key: '87cfd9d9b65cd48e2af6ea6608b3637b12d3fe9a', name: 'start' }), h("slot", { key: '6a0af7364da4cc62975adab17cd9ca1a3043e4af', name: 'label' }, this.label && h("je-label", { key: 'fe9d5952becb7fc69dab736df4d1d19b68789555', required: this.required }, this.label)), h("span", { key: '2b2e8301a344cc7c77505f24d6c58fc4ed3ee2bb', part: 'content', class: { placeholder: !this.content && !!this.placeholder } }, this.content || this.placeholder || null), h("slot", { key: '3a85d9ef36e3c98bcf24bed277998e143ebe5f0e', name: 'end' }), h("je-icon", { key: 'bfdfe25e40d605e120e350379e5e18b36952104e', class: { open: this.open } }, "keyboard_arrow_down")), h("div", { key: '90ac442cbb70c7ed6c33adb4a81c2ea0ef472ed9', role: 'group' }, h("slot", { key: 'abcb285a307ce7dde3d44df563f621d04dd02537', onSlotchange: () => forceUpdate(this.hostEl) }, this.options?.map(option => (h("je-option", null, option.label)))))), h("slot", { key: '4279d64c2b277ef8cd7ad481452188d8e1e6c9ef', name: 'note' }, this.note && h("je-note", { key: '7d4cc070efa5d748f065cee2d7a33e8c46e57549' }, this.note))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get style() { return jeSelectCss; }
}, [337, "je-select", {
        "value": [8],
        "label": [1],
        "disabled": [4],
        "required": [4],
        "placeholder": [1],
        "note": [1],
        "multiple": [4],
        "originalValue": [8, "original-value"],
        "options": [16],
        "size": [1],
        "open": [32],
        "content": [32]
    }, [[0, "click", "onClick"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-select", "je-icon", "je-label", "je-note", "je-option", "je-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "je-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeSelect$1);
            }
            break;
        case "je-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "je-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "je-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "je-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "je-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const JeSelect = JeSelect$1;
const defineCustomElement = defineCustomElement$1;

export { JeSelect, defineCustomElement };
//# sourceMappingURL=je-select.js.map

//# sourceMappingURL=je-select.js.map