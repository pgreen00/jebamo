import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jePageCss = "";

const JePage$1 = /*@__PURE__*/ proxyCustomElement(class JePage extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
    get header() {
        return this.el.querySelector(':scope > header');
    }
    get footer() {
        return this.el.querySelector(':scope > footer');
    }
    watchHeaderAndFooter = () => {
        const { header, footer } = this;
        if (header) {
            this.resizeObserver.observe(header);
        }
        if (footer) {
            this.resizeObserver.observe(footer);
        }
    };
    setVars = () => {
        const { header, footer } = this;
        if (header) {
            this.el.style.setProperty('--head-height', `${header.clientHeight + 1}px`);
        }
        if (footer) {
            this.el.style.setProperty('--foot-height', `${footer.clientHeight + 1}px`);
        }
    };
    resizeObserver = new ResizeObserver(this.setVars);
    mutationObserver = new MutationObserver(() => {
        this.resizeObserver.disconnect();
        this.watchHeaderAndFooter();
    });
    connectedCallback() {
        this.setVars();
        this.watchHeaderAndFooter();
        this.mutationObserver.observe(this.el, {
            childList: true,
        });
    }
    disconnectedCallback() {
        this.resizeObserver.disconnect();
        this.mutationObserver.disconnect();
    }
    render() {
        return (h(Host, { key: 'cf10fcf116b2b14fa3e5e6e18a4619d49cf343ae' }, h("slot", { key: '0cef9d6a13a88c7d803f8dd1478fa8c080f8ea1d' })));
    }
    static get style() { return jePageCss; }
}, [260, "je-page"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-page"];
    components.forEach(tagName => { switch (tagName) {
        case "je-page":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JePage$1);
            }
            break;
    } });
}

const JePage = JePage$1;
const defineCustomElement = defineCustomElement$1;

export { JePage, defineCustomElement };
//# sourceMappingURL=je-page.js.map

//# sourceMappingURL=je-page.js.map