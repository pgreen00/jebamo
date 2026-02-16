import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeIconScss = ":host{display:inline;cursor:inherit;font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-transform:none;user-select:none;-webkit-user-select:none;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;font-variation-settings:'FILL' var(--fill), 'wght' var(--weight), 'GRAD' var(--grade), 'opsz' var(--optical)}";

const size = {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.5rem',
    lg: '2.5rem',
    xl: '3rem'
};
const optical = {
    xs: '16',
    sm: '20',
    md: '24',
    lg: '40',
    xl: '48'
};
const JeIcon = /*@__PURE__*/ proxyCustomElement(class JeIcon extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    /** Size of the icon */
    size = 'md';
    /** Whether or not the icon should be filled */
    fill = false;
    /** Icon grade */
    grade;
    /** Icon weight */
    weight = 400;
    render() {
        return (h(Host, { key: '8e940a31eea6691b34be1b9c4370bf2567e207ac' }, h("style", { key: 'faf0922ea21a69a0e591af1b1cdc18ddf484486b' }, `
          :host {
            --grade: ${this.grade == 'low' ? -25 : this.grade == 'high' ? 200 : 0};
            --weight: ${this.weight};
            --fill: ${this.fill ? 1 : 0};
            font-size: ${size[this.size]};
            --optical: ${optical[this.size]};
          }
        `), h("slot", { key: 'bc0a1f8844f91d9158ec4f265ae12cc27b443740' })));
    }
    static get style() { return jeIconScss; }
}, [257, "je-icon", {
        "size": [1],
        "fill": [4],
        "grade": [1],
        "weight": [2]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "je-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeIcon);
            }
            break;
    } });
}

export { JeIcon as J, defineCustomElement as d };
//# sourceMappingURL=p-CRZ_8E-L.js.map

//# sourceMappingURL=p-CRZ_8E-L.js.map