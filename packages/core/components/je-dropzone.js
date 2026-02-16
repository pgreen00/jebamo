import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-BE32ZzHI.js';

const jeDropzoneCss = ":host{display:flex;align-items:center;justify-content:center;height:200px;width:300px;border:1px dashed canvastext;transition:border-color 250ms, background-color 250ms}:host(.hover){border-color:var(--je-primary-500);background-color:light-dark(var(--je-neutral-100), var(--je-neutral-900))}";

const JeDropzone$1 = /*@__PURE__*/ proxyCustomElement(class JeDropzone extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.dataDrop = createEvent(this, "dataDrop", 7);
    }
    get el() { return this; }
    dataDrop;
    onDrop(e) {
        e.preventDefault();
        this.el.classList.remove('hover');
        this.dataDrop.emit(e.dataTransfer);
    }
    onDragOver(e) {
        e.preventDefault();
        this.el.classList.add('hover');
    }
    onDragLeave(e) {
        e.preventDefault();
        this.el.classList.remove('hover');
    }
    render() {
        return (h(Host, { key: 'ddd5426a5440495ba890bd3791c07fb2836af8a2' }, h("slot", { key: 'b32271971e72a6c1a8f68a38425131a141a95a63' })));
    }
    static get style() { return jeDropzoneCss; }
}, [257, "je-dropzone", undefined, [[0, "drop", "onDrop"], [0, "dragover", "onDragOver"], [0, "dragleave", "onDragLeave"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-dropzone"];
    components.forEach(tagName => { switch (tagName) {
        case "je-dropzone":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeDropzone$1);
            }
            break;
    } });
}

const JeDropzone = JeDropzone$1;
const defineCustomElement = defineCustomElement$1;

export { JeDropzone, defineCustomElement };
//# sourceMappingURL=je-dropzone.js.map

//# sourceMappingURL=je-dropzone.js.map