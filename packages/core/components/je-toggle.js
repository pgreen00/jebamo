import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-BE32ZzHI.js';

const jeToggleCss = ":host{display:inline-flex;align-items:center;gap:var(--je-spacing-2xs);width:fit-content;cursor:pointer;-webkit-user-select:none;user-select:none;outline-color:var(--je-primary-200);outline-offset:2px;box-sizing:border-box}:host([disabled]){opacity:0.6;cursor:not-allowed}:host(:state(checked)) .toggle-container{background-color:light-dark(var(--je-primary-500), var(--je-primary-200))}:host(:state(checked)) .toggle-thumb{left:100%;transform:translateX(-100%);border-color:light-dark(var(--je-primary-500), var(--je-primary-200))}.toggle-container{display:flex;align-items:center;width:2.5rem;height:1rem;padding:var(--je-spacing-3xs);box-sizing:border-box;border-radius:var(--je-radius-pill);position:relative;transition:background-color 250ms ease-in-out;background-color:var(--je-neutral-500)}.toggle-thumb{position:absolute;height:var(--je-spacing-lg);width:var(--je-spacing-lg);background-color:light-dark(var(--je-neutral-50), var(--je-neutral-950));border:solid 1px var(--je-neutral-500);border-radius:50%;transition:all 250ms ease-in-out;left:0;right:unset}";

const JeToggle$1 = /*@__PURE__*/ proxyCustomElement(class JeToggle extends H {
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
     * Whether or not the toggle is active
     */
    value = false;
    /**
     * If the label should be placed at the start or end of the toggle
     */
    labelPlacement = 'end';
    /**
     * Emits the new value whenever toggle is clicked
     */
    valueChange;
    componentWillLoad() {
        if (this.originalValue === undefined) {
            this.originalValue = this.value;
        }
    }
    formResetCallback() {
        this.value = this.originalValue;
    }
    componentDidLoad() {
        this.internals.role = 'switch';
        this.el.tabIndex = 0;
    }
    componentDidRender() {
        this.internals.states.clear();
        this.internals.states.add(this.value ? 'checked' : 'unchecked');
        this.internals.ariaChecked = this.value ? 'true' : 'false';
    }
    onClick() {
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
    render() {
        return (h(Host, { key: '84165e4645b15b64d84709f3efbdadfd79f919a5' }, this.labelPlacement == 'start' && h("slot", { key: 'da3a56dfeaf69e01cdaf0fa18f04e99bdef62918' }), h("div", { key: '9df78f4eb8e0a50c221dd7c54e03d4a81c8ef650', class: 'toggle-container' }, h("div", { key: 'dcef5ae306ee8757443a4a567e7bfc044962ed37', class: 'toggle-thumb' })), this.labelPlacement == 'end' && h("slot", { key: 'fa24d50ea5b0e9782df235496473172d6fc94dbb' })));
    }
    static get formAssociated() { return true; }
    static get style() { return jeToggleCss; }
}, [321, "je-toggle", {
        "originalValue": [4, "original-value"],
        "value": [1028],
        "labelPlacement": [1, "label-placement"]
    }, [[2, "click", "onClick"], [2, "keydown", "onKeyDown"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-toggle"];
    components.forEach(tagName => { switch (tagName) {
        case "je-toggle":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeToggle$1);
            }
            break;
    } });
}

const JeToggle = JeToggle$1;
const defineCustomElement = defineCustomElement$1;

export { JeToggle, defineCustomElement };
//# sourceMappingURL=je-toggle.js.map

//# sourceMappingURL=je-toggle.js.map