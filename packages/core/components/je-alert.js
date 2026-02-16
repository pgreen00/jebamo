import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-BE32ZzHI.js';
import { d as defineCustomElement$5 } from './p-Bq6w2KBv.js';
import { d as defineCustomElement$4 } from './p-CRZ_8E-L.js';
import { d as defineCustomElement$3 } from './p-C_N6ZFok.js';
import { d as defineCustomElement$2 } from './p-DA7lkZbH.js';

const jeAlertCss = ":host {\n  display: none;\n  overflow: hidden;\n  position: relative;\n  box-shadow: var(--box-shadow);\n  border: var(--border);\n  border-radius: var(--je-radius-md);\n  box-sizing: border-box;\n  background-color: var(--background);\n  color: var(--color);\n  font-size: var(--je-font-sm);\n  padding: var(--je-spacing-sm);\n\n  --accent: light-dark(var(--je-neutral-600), var(--je-neutral-500));\n  --background: light-dark(rgb(233, 236, 236), rgb(41, 45, 46));\n  --color: light-dark(var(--je-neutral-800), var(--je-neutral-300));\n  --box-shadow: 0px 4px 16px 0px light-dark(rgba(0, 0, 0, 0.12), rgba(68, 68, 68, 0.12));\n  --border: solid 1px light-dark(rgb(197, 200, 204), rgb(86, 87, 90));\n}\n\n:host([open]:not([open=false])) {\n  display: block;\n}\n\n:host([color=primary]) {\n  --accent: light-dark(var(--je-primary-500), var(--je-primary-200));\n}\n\n:host([color=warning]) {\n  --accent: var(--je-warning-400);\n}\n\n:host([color=danger]) {\n  --accent: light-dark(var(--je-danger-400), var(--je-danger-300));\n}\n\n:host([color=success]) {\n  --accent: var(--je-success-600);\n}\n\n.progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: var(--accent);\n  height: var(--je-spacing-2xs);\n  animation: shorten linear forwards;\n  animation-play-state: paused;\n\n  &.running {\n    animation-play-state: running;\n  }\n}\n\n@keyframes shorten {\n  from {\n    width: 100%;\n  }\n\n  to {\n    width: 0;\n  }\n}";

const JeAlert$1 = /*@__PURE__*/ proxyCustomElement(class JeAlert extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.present = createEvent(this, "present", 7);
        this.dismiss = createEvent(this, "dismiss", 7);
    }
    role;
    data;
    paused = true;
    get el() { return this; }
    closable = false;
    color;
    duration = 0;
    open = false;
    present;
    dismiss;
    onOpenChange(open) {
        if (open) {
            const animation = this.el.animate({
                opacity: [0, 1],
                transform: ['scale(0%)', 'scale(100%)'],
                display: ['none', 'block']
            }, 600);
            animation.onfinish = () => {
                this.paused = false;
                this.present.emit();
            };
        }
        else {
            const animation = this.el.animate({
                opacity: [1, 0],
                transform: ['scale(100%)', 'scale(0%)'],
                display: ['block', 'none']
            }, 600);
            animation.onfinish = () => {
                this.paused = true;
                this.dismiss.emit({
                    role: this.role ?? 'manualDismiss',
                    data: this.data
                });
                this.role = undefined;
                this.data = undefined;
            };
        }
    }
    async show() {
        this.open = true;
    }
    async hide(role, data) {
        this.role = role;
        this.data = data;
        this.open = false;
    }
    didDismiss() {
        return new Promise(resolve => {
            this.el.addEventListener('dismiss', e => resolve(e.detail), { once: true });
        });
    }
    onMouseEnter() {
        if (this.open)
            this.paused = true;
    }
    onMouseLeave() {
        if (this.open)
            this.paused = false;
    }
    render() {
        return (h(Host, { key: '9c46bc70f715fcd0ba85a897ed71973c505dd720' }, this.duration > 0 && (h("div", { key: '46abdb481506c73da943ca513eb3c26362e59037', onAnimationEnd: () => this.hide('autoDismiss'), class: { progress: true, running: this.open && !this.paused }, style: { animationDuration: `${this.duration}ms` } })), h("je-toolbar", { key: 'f7a9cae7fc2779dd4bab4d21241e39792bfd16ea' }, h("slot", { key: '907405c73d1ef6a056c6c5174edd337dd5c88b56', name: 'start' }), h("div", { key: '764c0c0c1fbf30ea2ee12b609adf4e5008e7150b' }, h("slot", { key: '6ad73b4261fe7f78503e3d16cc6abd155f7fa182' })), h("slot", { key: '44fca34ac86fd40824caa15de0b3d64109559bec', slot: 'end', name: 'end' }), this.closable && h("je-button", { key: '0fd31ea28e6c5c3bd5940a99c7da8f7bf84172d4', fill: 'clear', class: 'icon-only', slot: 'end', onClick: () => this.hide('userDismiss') }, h("je-icon", { key: 'b3c9840a2f594338f8c03a7027d91add72b55d53' }, "close")))));
    }
    static get watchers() { return {
        "open": ["onOpenChange"]
    }; }
    static get style() { return jeAlertCss; }
}, [257, "je-alert", {
        "closable": [4],
        "color": [513],
        "duration": [2],
        "open": [1540],
        "paused": [32],
        "show": [64],
        "hide": [64],
        "didDismiss": [64]
    }, [[1, "mouseenter", "onMouseEnter"], [1, "mouseleave", "onMouseLeave"]], {
        "open": ["onOpenChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-alert", "je-button", "je-icon", "je-loading", "je-toolbar"];
    components.forEach(tagName => { switch (tagName) {
        case "je-alert":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeAlert$1);
            }
            break;
        case "je-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "je-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "je-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "je-toolbar":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const JeAlert = JeAlert$1;
const defineCustomElement = defineCustomElement$1;

export { JeAlert, defineCustomElement };
//# sourceMappingURL=je-alert.js.map

//# sourceMappingURL=je-alert.js.map