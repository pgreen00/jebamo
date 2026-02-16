import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-BE32ZzHI.js';
import { d as defineCustomElement$3 } from './p-HBw7xUgW.js';
import { d as defineCustomElement$2 } from './p-MWdJxJ50.js';

const jeRadioGroupCss = ":host{display:contents}[part=main]{display:block;width:fit-content}:host([disabled]) [part=main]{opacity:0.6}.buttons{display:flex;box-sizing:border-box}.content{display:contents}";

const JeRadioGroup$1 = /*@__PURE__*/ proxyCustomElement(class JeRadioGroup extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.valueChange = createEvent(this, "valueChange", 3);
        this.internals = this.attachInternals();
    }
    internals;
    get el() { return this; }
    tabindex = 0;
    /**
     * Requires a value before the form can be submitted
     */
    required;
    /**
     * Disables the controls
     */
    disabled = false;
    /**
     * Value the form will reset to. Defaults to initial value if not specified
     */
    originalValue;
    /**
     * Label that shows above the control
     */
    label;
    /**
     * Additional info that shows below the control
     */
    note;
    /**
     * The currently selected value
     */
    value;
    /**
     * Emits the selected value whenever it changes
     */
    valueChange;
    componentWillLoad() {
        this.internals.setFormValue(this.value);
        if (!this.originalValue)
            this.originalValue = this.value;
    }
    componentWillRender() {
        this.getRadios().forEach(radio => radio.selected = radio.value === this.value);
    }
    componentDidRender() {
        this.internals.ariaLabel = this.label || this.el.querySelector('[slot=label]')?.textContent;
        this.internals.ariaDescription = this.note || this.el.querySelector('[slot=note]')?.textContent;
        this.internals.ariaInvalid = this.internals.validity.valid ? 'true' : 'false';
        this.internals.states.clear();
        if (this.required) {
            this.internals.states.add('--required');
            if (this.getRadios().every(t => t.selected)) {
                this.internals.states.add('--valid');
            }
            else {
                this.internals.setValidity({ customError: true }, 'Please select an option.');
                this.internals.states.add('--invalid');
            }
        }
    }
    componentDidLoad() {
        this.internals.role = 'radiogroup';
    }
    formResetCallback() {
        if (this.value !== this.originalValue) {
            this.value = this.originalValue;
        }
    }
    getRadios() {
        return Array.from(this.el.querySelectorAll('je-radio, je-radio-button'));
    }
    isRadio(target) {
        return target instanceof H && (target.tagName == 'JE-RADIO' || target.tagName == 'JE-RADIO-BUTTON');
    }
    handleValueChange() {
        this.internals.setFormValue(this.value);
    }
    onFocus() {
        const radios = this.getRadios();
        (radios.find(radio => radio.value === this.value) ?? radios[0])?.focus();
    }
    onFocusIn() {
        this.tabindex = -1;
    }
    onFocusOut() {
        this.tabindex = 0;
    }
    handleNewValue(ev) {
        const { target } = ev;
        if (this.isRadio(target)) {
            this.value = target.value;
            this.valueChange.emit(this.value);
        }
    }
    handleKeyDown(ev) {
        const { target, key } = ev;
        if (this.isRadio(target) && !this.disabled) {
            if (key === 'ArrowDown' || key === 'ArrowRight') {
                ev.preventDefault();
                const radios = this.getRadios();
                const index = radios.findIndex(radio => radio.value === this.value);
                const radio = radios[(index + 1) % radios.length];
                radio.focus();
                this.value = radio.value;
                this.valueChange.emit(this.value);
            }
            else if (key === 'ArrowUp' || key === 'ArrowLeft') {
                ev.preventDefault();
                const radios = this.getRadios();
                const index = radios.findIndex(radio => radio.value === this.value);
                const radio = radios[(index - 1 + radios.length) % radios.length];
                radio.focus();
                this.value = radio.value;
                this.valueChange.emit(this.value);
            }
            else if (ev.key === ' ') {
                this.value = target.value;
                this.valueChange.emit(this.value);
            }
        }
    }
    render() {
        const buttons = this.el.querySelector('je-radio-button') !== null;
        return (h(Host, { key: '2b95eb67589b83e8e2e76ac11748d37898aaee73', tabindex: this.tabindex }, h("slot", { key: 'de479ad72e4541d4a96494d8cf6a20caaaac962f', name: 'label' }, this.label && h("je-label", { key: '56a0c631994a477b359e987d96c3aaa8dd63d741', required: this.required }, this.label)), h("div", { key: '05480ff981081a59b958d465afe49bbc61a436d8', class: buttons ? 'buttons' : 'content' }, h("slot", { key: 'aee3e745415dea6e3d1c2e385be8580fb24a1bc6' })), h("slot", { key: 'f52b0e5f8ba08fe4ff0a4fbcfcbf56d8f8e0674f', name: 'note' }, this.note && h("je-note", { key: 'cf781b417a3c57b2c7885e5ea754c8e181c4afdf' }, this.note))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
    static get style() { return jeRadioGroupCss; }
}, [321, "je-radio-group", {
        "required": [4],
        "disabled": [4],
        "originalValue": [8, "original-value"],
        "label": [1],
        "note": [1],
        "value": [1032],
        "tabindex": [32]
    }, [[0, "focus", "onFocus"], [0, "focusin", "onFocusIn"], [0, "focusout", "onFocusOut"], [0, "click", "handleNewValue"], [2, "keydown", "handleKeyDown"]], {
        "value": ["handleValueChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-radio-group", "je-label", "je-note"];
    components.forEach(tagName => { switch (tagName) {
        case "je-radio-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeRadioGroup$1);
            }
            break;
        case "je-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "je-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const JeRadioGroup = JeRadioGroup$1;
const defineCustomElement = defineCustomElement$1;

export { JeRadioGroup, defineCustomElement };
//# sourceMappingURL=je-radio-group.js.map

//# sourceMappingURL=je-radio-group.js.map