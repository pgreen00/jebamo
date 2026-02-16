import { p as proxyCustomElement, H, c as createEvent, h } from './p-BE32ZzHI.js';

const jeBreadcrumbsCss = ":host{display:contents}nav{display:flex;align-items:center;color:light-dark(var(--je-neutral-600), var(--je-neutral-400));font-weight:var(--je-font-semi-bold);font-size:var(--je-font-sm);line-height:var(--je-spacing-lg)}::slotted(je-breadcrumb:last-child){color:light-dark(var(--je-primary-700), var(--je-primary-200))}::slotted(:not(:last-child))::after{content:\"pen_size_1\";display:inline-flex;transform:rotate(-15deg);cursor:inherit;font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:var(--je-font-lg);line-height:unset;letter-spacing:normal;text-transform:none;user-select:none;-webkit-user-select:none;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20;color:light-dark(var(--je-neutral-300), var(--je-neutral-700))}::slotted(button.collapse){background-color:transparent;color:inherit;cursor:pointer;font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:var(--je-font-lg);line-height:unset;letter-spacing:normal;text-transform:none;user-select:none;-webkit-user-select:none;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20;border:none;margin:0;padding:0}";

const JeBreadcrumbs$1 = /*@__PURE__*/ proxyCustomElement(class JeBreadcrumbs extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.expandClick = createEvent(this, "expandClick", 7);
    }
    get host() { return this; }
    itemsBeforeCollapse = 1;
    itemsAfterCollapse = 1;
    maxItems;
    expandClick;
    componentWillRender() {
        const crumbs = Array.from(this.host.querySelectorAll('je-breadcrumb'));
        this.host.querySelector('.collapse')?.remove();
        if (this.maxItems && crumbs.length > this.maxItems) {
            crumbs.forEach((crumb, index) => {
                const shouldShow = index < this.itemsBeforeCollapse || index >= crumbs.length - this.itemsAfterCollapse;
                crumb.classList.toggle('visible', shouldShow);
            });
            if (crumbs.length > this.itemsBeforeCollapse) {
                const insertionIndex = Math.min(this.itemsBeforeCollapse - 1, crumbs.length - 1);
                const referenceCrumb = crumbs[insertionIndex];
                referenceCrumb.insertAdjacentHTML('afterend', '<button class="collapse">more_horiz</button>');
                const collapseButton = this.host.querySelector('.collapse');
                collapseButton.onclick = () => this.expandClick.emit();
            }
        }
        else {
            crumbs.forEach((crumb) => crumb.classList.add('visible'));
        }
    }
    componentDidRender() {
        const crumbs = Array.from(this.host.querySelectorAll('je-breadcrumb'));
        crumbs.forEach((crumb, _i) => {
            const anchor = crumb.shadowRoot.querySelector('a');
            if (anchor) {
                if (crumb.matches(':last-of-type')) {
                    anchor.setAttribute('aria-current', 'page');
                }
                else {
                    anchor.removeAttribute('aria-current');
                }
            }
        });
    }
    render() {
        return (h("nav", { key: '76318945c218664cba7d623eda7ba80e98a18808' }, h("slot", { key: '6fba2ad947e9c2ba376b27350af35888b0502af5' })));
    }
    static get style() { return jeBreadcrumbsCss; }
}, [257, "je-breadcrumbs", {
        "itemsBeforeCollapse": [2, "items-before-collapse"],
        "itemsAfterCollapse": [2, "items-after-collapse"],
        "maxItems": [2, "max-items"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-breadcrumbs"];
    components.forEach(tagName => { switch (tagName) {
        case "je-breadcrumbs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeBreadcrumbs$1);
            }
            break;
    } });
}

const JeBreadcrumbs = JeBreadcrumbs$1;
const defineCustomElement = defineCustomElement$1;

export { JeBreadcrumbs, defineCustomElement };
//# sourceMappingURL=je-breadcrumbs.js.map

//# sourceMappingURL=je-breadcrumbs.js.map