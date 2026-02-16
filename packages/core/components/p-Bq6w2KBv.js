import { p as proxyCustomElement, H, h, f as forceUpdate, d as Host } from './p-BE32ZzHI.js';
import { d as defineCustomElement$1 } from './p-C_N6ZFok.js';

const jeButtonCss = ":host{display:inline-flex;align-items:center;justify-content:center;gap:0.25rem;position:relative;box-sizing:border-box;border-radius:var(--je-radius-md);margin:0;padding:0 var(--padding-inline);cursor:pointer;flex-shrink:0;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;text-transform:capitalize;text-wrap:wrap;font-family:inherit;font-size:var(--font-size);font-weight:var(--je-font-semi-bold);height:var(--height);color:var(--color, inherit);background-color:var(--background, transparent);transition:all var(--je-transition-fast) ease-in-out;outline-color:var(--je-primary-300);outline-offset:3px}:host([size=sm]){--height:2rem;--padding-inline:var(--je-spacing-sm);--font-size:var(--je-font-sm)}:host([size=md]){--height:2.5rem;--padding-inline:var(--je-spacing-md);--font-size:var(--je-font-md)}:host([size=lg]){--height:3rem;--padding-inline:var(--je-spacing-lg);--font-size:var(--je-font-lg)}:host(.icon-only){--padding-inline:0;--size:calc(var(--height) - 0.5rem);width:var(--size);height:var(--size);border-radius:var(--je-radius-circle)}:host([expand]){width:100%}:host([aria-disabled=true]){opacity:0.6;cursor:not-allowed;pointer-events:none}:host([aria-disabled=true][pending]){opacity:0.8;cursor:progress;width:var(--pending-width)}:host(:not([color])[fill=solid]){--color:light-dark(var(--je-neutral-75), var(--je-neutral-925));--background:light-dark(var(--je-neutral-950), var(--je-neutral-200));--hover-background:light-dark(var(--je-neutral-850), var(--je-neutral-300));--active-background:light-dark(var(--je-neutral-800), var(--je-neutral-400))}:host([color=primary][fill=solid]){--color:var(--je-neutral-75);--background:var(--je-primary-500);--hover-background:var(--je-primary-550);--active-background:var(--je-primary-600)}:host([color=success][fill=solid]){--color:var(--je-neutral-925);--background:var(--je-success-500);--hover-background:var(--je-success-550);--active-background:var(--je-success-600)}:host([color=warning][fill=solid]){--color:var(--je-neutral-925);--background:var(--je-warning-500);--hover-background:var(--je-warning-550);--active-background:var(--je-warning-600)}:host([color=danger][fill=solid]){--color:var(--je-neutral-75);--background:var(--je-danger-500);--hover-background:var(--je-danger-450);--active-background:var(--je-danger-400)}:host(:not([color]):not([fill=solid])){--color:light-dark(var(--je-neutral-925), var(--je-neutral-75));--background:transparent;--hover-background:light-dark(var(--je-neutral-100), var(--je-neutral-850));--active-background:light-dark(var(--je-neutral-150), var(--je-neutral-800));--border:solid 1px light-dark(var(--je-neutral-300), var(--je-neutral-750))}:host([color=primary]:not([fill=solid])){--color:light-dark(var(--je-primary-500), var(--je-primary-250));--background:transparent;--hover-background:light-dark(var(--je-primary-50), var(--je-primary-800));--active-background:light-dark(var(--je-primary-75), var(--je-primary-750));--border:solid 1px light-dark(var(--je-primary-100), var(--je-primary-500))}:host([color=success]:not([fill=solid])){--color:light-dark(var(--je-success-750), var(--je-success-500));--background:transparent;--hover-background:light-dark(var(--je-success-100), var(--je-success-900));--active-background:light-dark(var(--je-success-150), var(--je-success-850));--border:solid 1px light-dark(var(--je-success-200), var(--je-success-800))}:host([color=warning]:not([fill=solid])){--color:light-dark(var(--je-warning-750), var(--je-warning-500));--background:transparent;--hover-background:light-dark(var(--je-warning-100), var(--je-warning-900));--active-background:light-dark(var(--je-warning-150), var(--je-warning-850));--border:solid 1px light-dark(var(--je-warning-200), var(--je-warning-800))}:host([color=danger]:not([fill=solid])){--color:light-dark(var(--je-danger-500), var(--je-danger-250));--background:transparent;--hover-background:light-dark(var(--je-danger-50), var(--je-danger-800));--active-background:light-dark(var(--je-danger-75), var(--je-danger-750));--border:solid 1px light-dark(var(--je-danger-100), var(--je-danger-500))}:host([fill=outline]){border:var(--border)}@media (hover: hover){:host(:hover){background-color:var(--hover-background, var(--background, transparent));color:var(--hover-color, var(--color, inherit))}}:host(:active){background-color:var(--active-background, var(--background, transparent));color:var(--active-color, var(--color, inherit))}::slotted([slot=badge]){top:0;right:0;position:absolute;z-index:1;transform:translate(50%, -50%);border-radius:var(--je-radius-circle);box-sizing:border-box;color:light-dark(var(--je-neutral-100), var(--je-neutral-900));background-color:light-dark(var(--je-neutral-900), var(--je-neutral-100));padding:var(--je-spacing-2xs);font-size:var(--font-size);display:flex;align-items:center;justify-content:center}";

const JeButton = /*@__PURE__*/ proxyCustomElement(class JeButton extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    get el() { return this; }
    formButtonEl;
    /** Disables button */
    disabled = false;
    /** Can set to submit or reset to participate in forms */
    type;
    /**
     * Can set form id to participate in forms. Use this if you need to place
     * submit/reset button outside the form element
     */
    form;
    /** Expands the button to the full width of it's container */
    expand = false;
    /** Shows a loading spinner and disables the button */
    pending = false;
    /** Button fill */
    fill = 'solid';
    /** Button size */
    size = 'md';
    /** Predefined colors */
    color;
    componentDidLoad() {
        if (this.type) {
            const formEl = this.form ? document.getElementById(this.form) : this.el.closest('form');
            if (formEl) {
                this.formButtonEl = document.createElement('button');
                this.formButtonEl.type = this.type;
                this.formButtonEl.style.display = 'none';
                formEl.append(this.formButtonEl);
            }
        }
    }
    handleClick() {
        this.formButtonEl?.click();
    }
    onPendingChange() {
        if (this.pending) {
            this.el.style.setProperty('--pending-width', `${this.el.clientWidth}px`);
        }
    }
    onKeyDown(ev) {
        if (!this.disabled && !this.pending && (ev.key === 'Enter' || ev.key == ' ')) {
            ev.preventDefault();
            this.el.click();
        }
    }
    render() {
        return (h(Host, { key: 'e4fdfef1157567c161c21f3d77992d152429cb5e', role: 'button', "aria-disabled": `${this.disabled || this.pending}`, tabindex: this.disabled || this.pending ? '-1' : '0' }, this.pending ? h("je-loading", null) : h("slot", { onSlotchange: () => forceUpdate(this.el) }), h("slot", { key: '3c87d198e2277e2f6a1e85b1f298bcdd7dabfb68', name: 'badge' })));
    }
    static get watchers() { return {
        "pending": ["onPendingChange"]
    }; }
    static get style() { return jeButtonCss; }
}, [257, "je-button", {
        "disabled": [4],
        "type": [1],
        "form": [1],
        "expand": [4],
        "pending": [4],
        "fill": [513],
        "size": [513],
        "color": [513]
    }, [[0, "click", "handleClick"], [0, "keydown", "onKeyDown"]], {
        "pending": ["onPendingChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-button", "je-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "je-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeButton);
            }
            break;
        case "je-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { JeButton as J, defineCustomElement as d };
//# sourceMappingURL=p-Bq6w2KBv.js.map

//# sourceMappingURL=p-Bq6w2KBv.js.map