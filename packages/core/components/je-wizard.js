import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-BE32ZzHI.js';

const jeWizardCss = ":host {\n  display: flex;\n  align-items: center;\n  counter-reset: wizard;\n  box-sizing: border-box;\n  gap: var(--je-spacing-sm);\n}\n\n.step {\n  --before-background: var(--je-neutral-300);\n  --before-color: var(--je-neutral-800);\n  --after-background: var(--je-neutral-400);\n  display: flex;\n  align-items: center;\n  gap: var(--je-spacing-sm);\n  box-sizing: border-box;\n  counter-increment: wizard;\n\n  &.active,\n  &.completed {\n    --before-background: var(--je-primary-200);\n    --before-color: var(--je-primary-800);\n  }\n\n  &.completed::before {\n    font-family: 'Material Symbols Rounded';\n    content: \"check\";\n    font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 200, 'opsz' 24;\n    font-size: var(--je-font-xl);\n  }\n\n  &::before {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    font-size: var(--je-font-lg);\n    content: counter(wizard);\n    border-radius: var(--je-radius-circle);\n    width: var(--je-spacing-3xl);\n    height: var(--je-spacing-3xl);\n    background-color: var(--before-background);\n    color: var(--before-color);\n    transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\n  }\n\n  &:not(:last-of-type)::after {\n    display: block;\n    content: \"\";\n    height: 1px;\n    width: 5rem;\n    box-sizing: border-box;\n    background-color: var(--after-background);\n  }\n}\n\n.label {\n  display: block;\n  font-weight: var(--je-font-semi-bold);\n  color: light-dark(var(--je-neutral-800), var(--je-neutral-200));\n}\n\n.optional {\n  display: block;\n  font-weight: var(--je-font-light);\n  color: light-dark(var(--je-neutral-700), var(--je-neutral-400));\n}\n";

const JeWizard$1 = /*@__PURE__*/ proxyCustomElement(class JeWizard extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.stepChange = createEvent(this, "stepChange", 7);
        this.finish = createEvent(this, "finish", 7);
    }
    completedSteps = [];
    currentStep = 0;
    steps = [];
    stepChange;
    finish;
    async onCompletedStepsChange() {
        const isComplete = this.steps.every((t, index) => t.optional || this.completedSteps.includes(index));
        if (isComplete) {
            this.finish.emit();
        }
    }
    onCurrentStepChange(newValue) {
        this.stepChange.emit(newValue);
    }
    async next() {
        if (this.currentStep < this.steps.length - 1) {
            this.completedSteps = [...this.completedSteps, this.currentStep];
            this.currentStep++;
        }
        else if (this.currentStep === this.steps.length - 1) {
            this.completedSteps = [...this.completedSteps, this.currentStep];
        }
    }
    async previous() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.completedSteps = this.completedSteps.filter(step => step !== this.currentStep);
        }
    }
    async skip() {
        if (this.currentStep < this.steps.length - 1 && this.canSkipCurrentStep()) {
            this.currentStep++;
        }
    }
    async reset() {
        this.currentStep = 0;
        this.completedSteps = [];
    }
    async canSkip() {
        return this.canSkipCurrentStep();
    }
    canSkipCurrentStep = () => this.steps[this.currentStep]?.optional;
    render() {
        return (h(Host, { key: '545870c59baee87e29e1e356590895b9ddfbe2f3', "data-can-skip": this.canSkipCurrentStep(), role: 'navigation' }, this.steps.map((step, index) => (h("div", { "aria-current": index == this.currentStep ? 'step' : 'false', class: { step: true, active: index === this.currentStep, completed: this.completedSteps.includes(index) } }, h("div", null, h("span", { class: 'label' }, step.label), step.optional && h("span", { class: 'optional' }, "Optional")))))));
    }
    static get watchers() { return {
        "completedSteps": ["onCompletedStepsChange"],
        "currentStep": ["onCurrentStepChange"]
    }; }
    static get style() { return jeWizardCss; }
}, [257, "je-wizard", {
        "steps": [16],
        "completedSteps": [32],
        "currentStep": [32],
        "next": [64],
        "previous": [64],
        "skip": [64],
        "reset": [64],
        "canSkip": [64]
    }, undefined, {
        "completedSteps": ["onCompletedStepsChange"],
        "currentStep": ["onCurrentStepChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-wizard"];
    components.forEach(tagName => { switch (tagName) {
        case "je-wizard":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeWizard$1);
            }
            break;
    } });
}

const JeWizard = JeWizard$1;
const defineCustomElement = defineCustomElement$1;

export { JeWizard, defineCustomElement };
//# sourceMappingURL=je-wizard.js.map

//# sourceMappingURL=je-wizard.js.map