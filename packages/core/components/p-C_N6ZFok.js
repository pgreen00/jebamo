import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';

const jeLoadingCss = ":host{display:inline-block;position:relative;width:23px;height:23px;user-select:none}svg{position:absolute;top:0;left:0;width:100%;height:100%;transform:translateZ(0)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{animation:spinner-fade-out 1s linear infinite}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}";

const spinners = {
    lines: {
        dur: 1000,
        lines: 8,
        fn: (dur, index, total) => {
            const transform = `rotate(${(360 / total) * index + (index < total / 2 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index) / total - dur}ms`;
            return {
                y1: 14,
                y2: 26,
                style: {
                    transform: transform,
                    'animation-delay': animationDelay,
                },
            };
        },
    },
};
const buildLine = (spinner, duration, index, total) => {
    const data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + 'ms';
    return (h("svg", { viewBox: data.viewBox || '0 0 64 64', style: data.style }, h("line", { transform: "translate(32,32)", y1: data.y1, y2: data.y2 })));
};
const JeLoading = /*@__PURE__*/ proxyCustomElement(class JeLoading extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        const spinner = spinners['lines'];
        const duration = spinner.dur;
        const svgs = [];
        for (let i = 0; i < spinner.lines; i++) {
            svgs.push(buildLine(spinner, duration, i, spinner.lines));
        }
        return (h(Host, { key: '59bbbd23d893fe9407397e18c533474aa82b7a3a', class: { [`spinner-lines`]: true } }, svgs));
    }
    static get style() { return jeLoadingCss; }
}, [257, "je-loading"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "je-loading":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeLoading);
            }
            break;
    } });
}

export { JeLoading as J, defineCustomElement as d };
//# sourceMappingURL=p-C_N6ZFok.js.map

//# sourceMappingURL=p-C_N6ZFok.js.map