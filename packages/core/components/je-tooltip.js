import { p as proxyCustomElement, H, h, d as Host } from './p-BE32ZzHI.js';
import { a as autoUpdate, c as computePosition, o as offset, b as autoPlacement, s as size } from './p-Dy7PD-YW.js';
import { c as cjsExports } from './p-Bn8mRT4P.js';

/**
 * Recursively gather bounding rectangles of all "box-generating" child nodes
 * inside an element (including its shadow root if it has one), flattening
 * any `display: contents` elements along the way.
 */
function collectRects(element) {
    if (!element) {
        return [];
    }
    // The current list of rects from this element's children
    let rects = [];
    // Check if `element` itself generates a box, unless it's the top-level
    // element for which we are collecting rects. Usually we skip
    // the root since we want the sum of its children. But if you *do* want
    // the host's box, you could do it here:
    //
    const cs = window.getComputedStyle(element);
    if (cs.display !== 'contents') {
        rects.push(element.getBoundingClientRect());
    }
    // Get direct child nodes (shadow or light DOM)
    const childNodes = element.shadowRoot
        ? Array.from(element.shadowRoot.children)
        : Array.from(element.children);
    childNodes.forEach((child) => {
        if (child.nodeType === Node.ELEMENT_NODE &&
            !['STYLE', 'SCRIPT', 'LINK'].includes(child.tagName)) {
            const computedStyle = window.getComputedStyle(child);
            // If the element doesn't generate a box, flatten it by recursing
            // into its children (or shadow children).
            if (computedStyle.display === 'contents') {
                rects = rects.concat(collectRects(child));
            }
            else {
                // Child *does* generate a box; use its bounding rect
                rects.push(child.getBoundingClientRect());
                // But also check if this child *itself* has a shadow root:
                if (child.shadowRoot) {
                    rects = rects.concat(collectRects(child));
                }
            }
        }
    });
    return rects;
}
/**
 * Return a bounding rect that encompasses all the
 * box-generating children (including across shadow roots).
 */
function getDOMRect(element) {
    if (!element) {
        return new DOMRect();
    }
    const rects = collectRects(element);
    if (rects.length === 0) {
        return new DOMRect();
    }
    const left = Math.min(...rects.map((r) => r.left));
    const top = Math.min(...rects.map((r) => r.top));
    const right = Math.max(...rects.map((r) => r.right));
    const bottom = Math.max(...rects.map((r) => r.bottom));
    return new DOMRect(left, top, right - left, bottom - top);
}

const jeTooltipCss = ":host {\n  display: contents;\n\n  --padding: var(--je-spacing-xs) var(--je-spacing-sm);\n  --background: light-dark(var(--je-neutral-950), var(--je-neutral-800));\n  --color: var(--je-neutral-300);\n  --border: none;\n  --radius: var(--je-radius-md);\n}\n\n[popover] {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out, display 0.2s ease-in-out allow-discrete;\n  box-shadow: var(--je-shadow-sm);\n  max-width: var(--available-width);\n  max-height: var(--available-height);\n  border-radius: var(--radius);\n  border: var(--border);\n  font-family: inherit;\n  background-color: var(--background);\n  color: var(--color);\n  box-sizing: border-box;\n  padding: var(--padding);\n  margin: 0;\n}\n\n[popover]:popover-open {\n  opacity: 1;\n}\n\n@starting-style {\n  [popover]:popover-open {\n    opacity: 0;\n  }\n}\n";

const JeTooltip$1 = /*@__PURE__*/ proxyCustomElement(class JeTooltip extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    get el() { return this; }
    open = false;
    ready = new cjsExports.AsyncSubject();
    sub;
    get containerEl() {
        return this.el.shadowRoot.querySelector('slot[name=content]');
    }
    get referenceEl() {
        return { getBoundingClientRect: () => getDOMRect(this.el.querySelector(':scope > :not([slot])')) };
    }
    cleanup;
    /** The content of the tooltip */
    content;
    /** Horizontal offset used when auto positioning the popover content */
    offsetX = 0;
    /** Vertical offset used when auto positioning the popover content */
    offsetY = 10;
    componentDidLoad() {
        this.ready.next();
        this.ready.complete();
    }
    connectedCallback() {
        const mouseMoveDebounce = cjsExports.fromEvent(window, 'mousemove').pipe(cjsExports.debounceTime(50));
        this.sub = this.ready.pipe(cjsExports.map(() => this.el.querySelector(':not([slot])')), cjsExports.switchMap(triggerEl => cjsExports.merge(cjsExports.fromEvent(triggerEl, 'mouseenter').pipe(cjsExports.map(() => 'enter')), cjsExports.fromEvent(triggerEl, 'mouseleave').pipe(cjsExports.map(() => 'leave')))), cjsExports.debounce(() => mouseMoveDebounce)).subscribe(res => this.open = res == 'enter');
        this.sub.add(this.ready.pipe(cjsExports.tap(() => this.containerEl.popover = 'manual')).subscribe());
    }
    disconnectedCallback() {
        this.sub?.unsubscribe();
    }
    async onOpenChange(open) {
        if (open) {
            this.setPosition(await this.computePosition());
            this.cleanup = autoUpdate(this.referenceEl, this.containerEl, () => this.computePosition().then(this.setPosition));
            this.containerEl.showPopover();
        }
        else {
            this.cleanup();
            this.containerEl.hidePopover();
        }
    }
    setPosition = ({ x, y }) => {
        this.containerEl.style.left = `${x}px`;
        this.containerEl.style.top = `${y}px`;
    };
    computePosition() {
        return computePosition(this.referenceEl, this.containerEl, {
            strategy: 'fixed',
            middleware: [
                offset({
                    mainAxis: this.offsetY,
                    crossAxis: this.offsetX,
                }),
                autoPlacement(),
                size({
                    apply: ({ availableHeight, availableWidth }) => {
                        this.containerEl.style.setProperty('--available-height', `${availableHeight - this.offsetY}px`);
                        this.containerEl.style.setProperty('--available-width', `${availableWidth - this.offsetX}px`);
                    },
                })
            ]
        });
    }
    render() {
        return (h(Host, { key: '9fb45b7928e01ec5b67512d3a2f993497a0b15d2', role: "tooltip" }, h("slot", { key: '75b26a0dab4e2f7b334d8e679aeb501c6680bf72' }), h("slot", { key: '38ca3a5d70459948a2b3f55243f5e8c315999350', name: 'content' }, this.content && h("span", { key: '03f3ba4582af74c5783c29b7866107b4fef9416e' }, this.content))));
    }
    static get watchers() { return {
        "open": ["onOpenChange"]
    }; }
    static get style() { return jeTooltipCss; }
}, [257, "je-tooltip", {
        "content": [1],
        "offsetX": [2, "offset-x"],
        "offsetY": [2, "offset-y"],
        "open": [32]
    }, undefined, {
        "open": ["onOpenChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "je-tooltip":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeTooltip$1);
            }
            break;
    } });
}

const JeTooltip = JeTooltip$1;
const defineCustomElement = defineCustomElement$1;

export { JeTooltip, defineCustomElement };
//# sourceMappingURL=je-tooltip.js.map

//# sourceMappingURL=je-tooltip.js.map