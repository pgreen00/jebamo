import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-BE32ZzHI.js';
import { d as defineCustomElement$2 } from './p-CRZ_8E-L.js';

const jeCheckboxCss = ":host{display:inline-flex;align-items:center;gap:var(--je-spacing-2xs);width:fit-content;cursor:pointer;-webkit-user-select:none;user-select:none;outline-color:var(--je-primary-200);outline-offset:2px;box-sizing:border-box}je-icon{color:light-dark(var(--je-primary-500), var(--je-primary-200))}:host([disabled]){opacity:0.6;cursor:not-allowed}";

const JeCheckbox$1 = /*@__PURE__*/ proxyCustomElement(class JeCheckbox extends H {
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
    /**
     * Original value form will reset to
     */
    originalValue;
    /**
     * By default, it will submit true or false depending on the checked state.
     * Use this property to submit a custom value instead.
     */
    data;
    /**
     * Whether or not the checkbox is active
     */
    value;
    /**
     * Whether or not the label should go before or after the checkbox
     */
    labelPlacement = 'end';
    /**
     * If the checkbox should contain a 3rd indeterminate state
     */
    indeterminate = false;
    /**
     * Marks the control as required in the form. This will only affect indeterminate checkboxes.
     */
    required = false;
    /**
     * Emits the current value whenever it's state changes
     */
    valueChange;
    componentWillLoad() {
        if (this.value === undefined && !this.indeterminate) {
            this.value = false;
        }
        this.originalValue = this.value;
    }
    formResetCallback() {
        if (this.value !== this.originalValue) {
            this.value = this.originalValue;
        }
    }
    componentDidLoad() {
        this.internals.role = 'checkbox';
        this.el.tabIndex = 0;
    }
    componentDidRender() {
        this.internals.states.clear();
        this.internals.states.add(this.value ? 'checked' : this.value === undefined ? 'indeterminate' : 'unchecked');
        this.internals.ariaChecked = this.value ? 'true' : this.value === undefined ? 'mixed' : 'false';
        this.internals.ariaRequired = this.required ? 'true' : 'false';
        this.internals.ariaInvalid = this.internals.validity.valid ? 'true' : 'false';
    }
    onClick(_ev) {
        this.value = !this.value;
        this.valueChange.emit(this.value);
    }
    onKeyDown(ev) {
        if (ev.key === ' ') {
            ev.preventDefault();
            ev.stopPropagation();
            this.value = !this.value;
            this.valueChange.emit(this.value);
        }
    }
    handleValueChange() {
        this.internals.setFormValue(this.data ? (this.value === true ? this.data : null) : this.value === true ? 'true' : this.value === false ? 'false' : null);
        if (this.value === undefined && this.required) {
            this.internals.setValidity({ valueMissing: true }, 'This field is required');
        }
        else {
            this.internals.setValidity({});
        }
    }
    render() {
        return (h(Host, { key: '38df2fbd4dd240ddbb78b11b13c90574cb62bca3' }, this.labelPlacement == 'start' && h("slot", { key: 'd0e4ae8aff032fc3d222bdd2815669a69a9fa3d4' }), h("je-icon", { key: '26bc1cfee3144e09580f5a8d2b237c6e6f21e641', "aria-hidden": "true", fill: this.value }, this.value === true ? 'check_box' : this.value === false ? 'check_box_outline_blank' : 'indeterminate_check_box'), this.labelPlacement == 'end' && h("slot", { key: 'cc604e5d5d541170b74b02231384a0937c2a9894' })));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
    static get style() { return jeCheckboxCss; }
}, [321, "je-checkbox", {
        "originalValue": [4, "original-value"],
        "data": [1],
        "value": [1028],
        "labelPlacement": [1, "label-placement"],
        "indeterminate": [4],
        "required": [4]
    }, [[0, "click", "onClick"], [0, "keydown", "onKeyDown"]], {
        "value": ["handleValueChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-checkbox", "je-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "je-checkbox":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeCheckbox$1);
            }
            break;
        case "je-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const JeCheckbox = JeCheckbox$1;
const defineCustomElement = defineCustomElement$1;

export { JeCheckbox, defineCustomElement };
//# sourceMappingURL=je-checkbox.js.map

//# sourceMappingURL=je-checkbox.js.map