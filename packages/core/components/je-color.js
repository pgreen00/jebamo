import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const COLORS = {
    primary: 'var(--je-primary)',
    neutral: 'var(--je-neutral)',
    success: 'var(--je-success)',
    warning: 'var(--je-warning)',
    danger: 'var(--je-danger)'
};
const shade = (color, shade = 500) => {
    if (shade === 500) {
        return COLORS[color];
    }
    else if (shade < 500) {
        const percentageToWhite = (500 - shade) / 5 / 100;
        const colorPercentage = ((1 - percentageToWhite) * 100).toFixed(2);
        const whitePercentage = (percentageToWhite * 100).toFixed(2);
        return `color-mix(in srgb, ${COLORS[color]} ${colorPercentage}%, white ${whitePercentage}%)`;
    }
    else if (shade > 500) {
        const percentageToBlack = (shade - 500) / 5 / 100;
        const colorPercentage = ((1 - percentageToBlack) * 100).toFixed(2);
        const blackPercentage = (percentageToBlack * 100).toFixed(2);
        return `color-mix(in srgb, ${COLORS[color]} ${colorPercentage}%, black ${blackPercentage}%)`;
    }
};

const JeColor$1 = /*@__PURE__*/ proxyCustomElement(class JeColor extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    /** Fixed color */
    color;
    /** Color in light mode */
    light;
    /** Color in dark mode */
    dark;
    get cssValue() {
        if (this.color) {
            return shade(this.color, 500);
        }
        else {
            return `light-dark(${this.light ? shade(this.light, 500) : shade('neutral', 900)}, ${this.dark ? shade(this.dark, 500) : shade('neutral', 50)})`;
        }
    }
    render() {
        return (h(Host, { key: '65fac9df079e199f50f674bb4153e342f236d325' }, h("style", { key: '9dd96e2a4717768570d7c691394dd155237ff81f' }, `:host{display:contents;color:${this.cssValue};}`), h("slot", { key: '3dcfd907fdd0c27d530ae71ba6280327153a34b7' })));
    }
}, [257, "je-color", {
        "color": [513],
        "light": [1],
        "dark": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-color"];
    components.forEach(tagName => { switch (tagName) {
        case "je-color":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeColor$1);
            }
            break;
    } });
}

const JeColor = JeColor$1;
const defineCustomElement = defineCustomElement$1;

export { JeColor, defineCustomElement };
//# sourceMappingURL=je-color.js.map

//# sourceMappingURL=je-color.js.map