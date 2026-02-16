import { h, p as proxyCustomElement, H, c as createEvent, f as forceUpdate, d as Host } from './p-BE32ZzHI.js';
import { d as dateFnsExports } from './p-iWCgRMLC.js';
import { d as defineCustomElement$5 } from './p-Bq6w2KBv.js';
import { d as defineCustomElement$4 } from './p-HBw7xUgW.js';
import { d as defineCustomElement$3 } from './p-C_N6ZFok.js';
import { d as defineCustomElement$2 } from './p-MWdJxJ50.js';

const debounce = (func, wait = 0) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(func, wait, ...args);
    };
};
const debounceEvent = (event, wait) => {
    const original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait),
    };
};

const jeTextfieldCss = ":host {\n  display: flex;\n  flex-direction: column;\n  gap: var(--je-spacing-3xs);\n}\n\n:host(:focus) div[part=container] {\n  border-color: light-dark(var(--je-primary-500), var(--je-primary-200));\n}\n\n:host(:state(--user-invalid)) div[part=container] {\n  border-color: light-dark(var(--je-danger-400), var(--je-danger-300));\n}\n\nje-note {\n  margin-left: var(--je-spacing-xs);\n}\n\ndiv[part=container] {\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  gap: var(--je-spacing-xs);\n  border-radius: var(--je-radius-md);\n  border: solid 1px light-dark(var(--je-neutral-500), var(--je-neutral-400));\n  align-items: center;\n  background-color: light-dark(var(--je-primary-50), var(--je-primary-950));\n  color: light-dark(var(--je-neutral-900), var(--je-neutral-50));\n  padding-inline: var(--je-spacing-xs);\n  &.sm {\n    height: 2.5rem;\n    textarea {\n      height: 6rem;\n    }\n  }\n  &.md {\n    height: 3rem;\n    textarea {\n      height: 8rem;\n    }\n  }\n  &.lg {\n    height: 3.5rem;\n    textarea {\n      height: 10rem;\n    }\n  }\n  &.multiline {\n    align-items: baseline;\n    height: fit-content;\n  }\n  &.disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n}\n\ninput,\ntextarea {\n  background-color: inherit;\n  color: inherit;\n  font-family: inherit;\n  box-shadow: none;\n  flex: 1;\n  min-width: 0;\n  box-sizing: border-box;\n  outline: 0;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  font-size: var(--je-font-md);\n  font-weight: var(--je-font-light);\n  color: light-dark(var(--je-neutral-950), var(--je-neutral-50));\n\n  &::placeholder {\n    font-family: inherit;\n    color: light-dark(var(--je-neutral-700), var(--je-neutral-600));\n    font-size: var(--je-font-md);\n    font-weight: var(--je-font-light);\n  }\n\n  &[type=password]::-ms-reveal,\n  &[type=password]::-ms-clear {\n    display: none !important;\n  }\n\n  &.suppress::-webkit-calendar-picker-indicator {\n    display: none;\n  }\n}\n\ntextarea {\n  resize: none;\n}\n";

const JeTextfield$1 = /*@__PURE__*/ proxyCustomElement(class JeTextfield extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.valueChange = createEvent(this, "valueChange", 3);
        this.internals = this.attachInternals();
    }
    inputEl;
    invalid = false;
    get hostEl() { return this; }
    internals;
    touched = false;
    showPassword = false;
    /**
     * The default value the control will reset to in a form.
     * If not set, will default to the inital value of the "value" property.
     */
    originalValue;
    /**
     * Current value of the input
     */
    value;
    /**
     * Text above the control
     */
    label;
    /**
     * Informational message directly below the control
     */
    note;
    /**
     * Renders input as disabled and prevents changes
     */
    disabled = false;
    /**
     * Renders input as read only and prevents changes
     */
    readonly = false;
    /**
     * Passed to native input
     */
    autoCapitalize = 'off';
    /**
     * Passed to native input
     */
    autoComplete = 'off';
    /**
     * Passed to native input
     */
    autoCorrect = 'off';
    /**
     * Passed to native input
     */
    autoFocus;
    /**
     * Passed to native input
     */
    inputMode;
    /**
     * Passed to native input
     */
    min;
    /**
     * Passed to native input
     */
    max;
    /**
     * Passed to native input
     */
    minlength;
    /**
     * Passed to native input
     */
    maxlength;
    /**
     * Passed to native textarea
     */
    wrap;
    /**
     * Passed to native input
     */
    pattern;
    /**
     * Marks as required in form and adds asterisk to the end of the label
     */
    required = false;
    /**
     * Passed to native input
     */
    spellcheck = false;
    /**
     * Passed to native input
     */
    step;
    /**
     * Container size
     */
    size = 'md';
    /**
     * Input placeholder text
     */
    placeholder;
    /**
     * Optional debounce of the didInput event
     */
    debounce = 0;
    /**
     * Formatters functions that are applied as the user types
     */
    format;
    /**
     * Validator function for form participation
     */
    validate;
    /**
     * Transforms the value before it is passed to the input (from) and after the input emits a new value (to).
     *
     * There are built-in transformers for 'number', 'date', and 'datetime'.
     */
    transform;
    /**
     * Whether the control is a multiline textarea
     */
    multiline = false;
    /**
     * Emits as the user types
     */
    valueChange;
    componentWillLoad() {
        if (!this.originalValue)
            this.originalValue = this.value;
        if (this.debounce)
            this.valueChange = debounceEvent(this.valueChange, this.debounce);
    }
    componentDidLoad() {
        if (this.value)
            this.internals.setFormValue(this.value);
    }
    async componentWillRender() {
        const { hasError, minLengthError, maxLengthError, requiredError, patternError, customErrors } = await this.getErrors();
        this.invalid = hasError;
        if (hasError) {
            const errorMessage = requiredError
                ? 'This field is required'
                : minLengthError
                    ? `This field must be at least ${this.minlength} characters long`
                    : maxLengthError
                        ? `This field must be less than ${this.maxlength} characters long`
                        : patternError
                            ? `Invalid pattern`
                            : customErrors[0];
            this.internals.setValidity({
                valueMissing: requiredError,
                tooShort: minLengthError,
                tooLong: maxLengthError,
                patternMismatch: patternError,
                customError: customErrors.length > 0,
            }, errorMessage);
            if (this.touched) {
                this.internals.reportValidity();
            }
        }
        else {
            this.internals.setValidity({});
        }
    }
    componentDidRender() {
        this.internals.ariaLabel = this.label || this.hostEl.querySelector('[slot=label]')?.textContent;
        this.internals.ariaDescription = this.note || this.hostEl.querySelector('[slot=note]')?.textContent;
        this.internals.ariaInvalid = this.internals.validity.valid ? 'true' : 'false';
        this.internals.ariaRequired = this.required ? 'true' : 'false';
        this.internals.ariaDisabled = this.disabled ? 'true' : 'false';
        this.internals.ariaReadOnly = this.readonly ? 'true' : 'false';
        this.internals.ariaMultiLine = this.multiline ? 'true' : 'false';
        this.internals.ariaPlaceholder = this.placeholder || this.hostEl.querySelector('[slot=placeholder]')?.textContent;
        this.internals.ariaAutoComplete = this.autoComplete;
        this.internals.states.clear();
        this.internals.states.add(this.invalid ? '--invalid' : '--valid');
        if (this.touched)
            this.internals.states.add(this.invalid ? '--user-invalid' : '--user-valid');
        this.internals.states.add(this.required ? '--required' : '--optional');
        this.internals.states.add(this.disabled ? '--disabled' : '--enabled');
        this.internals.states.add(this.readonly ? '--readonly' : '--readwrite');
        this.internals.states.add(this.multiline ? '--multiline' : '--singleline');
        this.internals.states.add(this.value ? '--filled' : '--empty');
    }
    formResetCallback() {
        this.touched = false;
        this.value = this.originalValue;
        this.valueChange.emit(this.value);
    }
    handleValueChange() {
        this.internals.setFormValue(this.value || null);
    }
    async getInputElement() {
        return this.inputEl;
    }
    async markAsTouched() {
        this.touched = true;
    }
    async getErrors() {
        const requiredError = this.required && (this.value ?? '') === '';
        const minLengthError = this.minlength && (this.value ?? '').length < this.minlength;
        const maxLengthError = this.maxlength && (this.value ?? '').length > this.maxlength;
        const patternError = this.pattern && !new RegExp(this.pattern).test(this.value ?? '');
        const customErrors = this.validate?.(this.value) || [];
        return {
            requiredError,
            minLengthError,
            maxLengthError,
            patternError,
            customErrors,
            hasError: requiredError || minLengthError || maxLengthError || patternError || customErrors.length > 0,
        };
    }
    async isTouched() {
        return this.touched;
    }
    handleKeyDown(ev) {
        if (this.multiline && ev.key === 'Enter' && ev.shiftKey)
            ev.stopPropagation();
    }
    handleInvalid(ev) {
        //ev.stopPropagation();
        console.log(ev.composedPath());
    }
    getTransformer = () => {
        if (this.transform === 'number') {
            return {
                to: (value) => parseFloat(value),
                from: (value) => value.toString(),
            };
        }
        else if (this.transform === 'date') {
            return {
                to: (value) => (value ? dateFnsExports.parseISO(value).getTime() : value),
                from: (value) => (value ? dateFnsExports.format(value, 'yyyy-MM-dd') : value),
            };
        }
        else if (this.transform === 'datetime') {
            return {
                to: (value) => (value ? dateFnsExports.parseISO(value).getTime() : value),
                from: (value) => (value ? dateFnsExports.format(value, "yyyy-MM-dd'T'HH:mm:ss") : value),
            };
        }
        else if (this.transform === 'password') {
            return {
                to: (value) => value && '•'.repeat(value.length),
                from: () => this.value,
            };
        }
        else {
            return this.transform;
        }
    };
    formatInput = async (ev) => {
        const input = ev.target;
        if (input && this.format) {
            input.value = await this.format(input.value, this.value, ev);
        }
    };
    handleInput = (ev) => {
        const input = ev.target;
        if (input) {
            const transformer = this.getTransformer();
            this.value = transformer?.to ? transformer.to(input.value) : input.value;
            this.valueChange.emit(this.value);
        }
    };
    onFocus = () => {
        if (this.touched)
            forceUpdate(this.hostEl);
        else
            this.touched = false;
    };
    render() {
        const transformer = this.getTransformer();
        return (h(Host, { key: 'c3a3cbd7e1fdece8a6898343ede82acffc363f07', role: 'textbox' }, h("div", { key: '80123513515eee4a68af8f50324260626afd8340', part: "container", class: { [this.size]: true, disabled: this.disabled, multiline: this.multiline } }, h("slot", { key: 'b449dc485b1876e09892ea7dff313b569c757f84', name: "start" }), h("slot", { key: 'd4c24ddc4f65d8d72ea984d58c01b426301081d3', name: 'label' }, this.label && h("je-label", { key: '970df208e59bc3f597a59088e79826d4a18f50f8', part: 'label', required: this.required }, this.label)), this.multiline ? (h("textarea", { part: "textarea", tabindex: 0, ref: el => (this.inputEl = el), onInputCapture: this.formatInput, onInput: this.handleInput, onFocus: this.onFocus, autoCapitalize: this.autoCapitalize, autoComplete: this.autoComplete, autoCorrect: this.autoCorrect, autoFocus: this.autoFocus, disabled: this.disabled, maxLength: this.maxlength, minLength: this.minlength, placeholder: this.placeholder, readonly: this.readonly, required: this.required, spellcheck: this.spellcheck, wrap: this.wrap, value: transformer?.from ? transformer.from(this.value) : this.value })) : (h("input", { part: 'input', tabindex: 0, ref: el => (this.inputEl = el), onInputCapture: this.formatInput, onInput: this.handleInput, onFocus: this.onFocus, disabled: this.disabled, autoCapitalize: this.autoCapitalize, autoComplete: this.autoComplete, autoCorrect: this.autoCorrect, autoFocus: this.autoFocus, inputMode: this.inputMode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, pattern: this.pattern, readOnly: this.readonly, required: this.required, spellcheck: this.spellcheck, step: this.step, value: transformer?.from ? transformer.from(this.value) : this.value, placeholder: this.placeholder })), this.transform === 'password' && (h("je-button", { key: '89daa7fbb70888de9142d78a45bd08888ced20f5', size: "sm", onClick: () => (this.showPassword = !this.showPassword) }, this.showPassword ? eyeOff : eye)), h("slot", { key: '61afb4aadf73f72235f5fdc55d0270261c734658', name: "end" })), h("slot", { key: '4eb1a5c0a82ac25a0d502b6740a6d77b9a1f9bbd', name: 'note' }, this.invalid && this.touched ? (h("je-note", { part: 'note', invalid: true }, this.internals.validationMessage)) : this.note ? (h("je-note", { part: 'note' }, this.note)) : null)));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
    static get style() { return jeTextfieldCss; }
}, [337, "je-textfield", {
        "originalValue": [1025, "original-value"],
        "value": [1032],
        "label": [1],
        "note": [1],
        "disabled": [4],
        "readonly": [4],
        "autoCapitalize": [1, "auto-capitalize"],
        "autoComplete": [1, "auto-complete"],
        "autoCorrect": [1, "auto-correct"],
        "autoFocus": [4, "auto-focus"],
        "inputMode": [1, "input-mode"],
        "min": [8],
        "max": [8],
        "minlength": [2],
        "maxlength": [2],
        "wrap": [1],
        "pattern": [1],
        "required": [4],
        "spellcheck": [4],
        "step": [1],
        "size": [1],
        "placeholder": [1],
        "debounce": [2],
        "format": [16],
        "validate": [16],
        "transform": [1],
        "multiline": [4],
        "touched": [32],
        "showPassword": [32],
        "getInputElement": [64],
        "markAsTouched": [64],
        "getErrors": [64],
        "isTouched": [64]
    }, [[0, "keydown", "handleKeyDown"], [0, "invalid", "handleInvalid"]], {
        "value": ["handleValueChange"]
    }]);
const eye = h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-eye-icon lucide-eye" }, h("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }), h("circle", { cx: "12", cy: "12", r: "3" }));
const eyeOff = h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-eye-off-icon lucide-eye-off" }, h("path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" }), h("path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242" }), h("path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" }), h("path", { d: "m2 2 20 20" }));
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-textfield", "je-button", "je-label", "je-loading", "je-note"];
    components.forEach(tagName => { switch (tagName) {
        case "je-textfield":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeTextfield$1);
            }
            break;
        case "je-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "je-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "je-loading":
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

const JeTextfield = JeTextfield$1;
const defineCustomElement = defineCustomElement$1;

export { JeTextfield, defineCustomElement };
//# sourceMappingURL=je-textfield.js.map

//# sourceMappingURL=je-textfield.js.map