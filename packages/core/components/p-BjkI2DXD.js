import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-BE32ZzHI.js';
import { a as autoUpdate, c as computePosition, o as offset, d as shift, f as flip, b as autoPlacement, s as size, e as arrow } from './p-Dy7PD-YW.js';
import { c as cjsExports } from './p-Bn8mRT4P.js';

const jePopoverCss = ":host {\n  display: contents;\n\n  --background: light-dark(rgb(233, 236, 236), rgb(41, 45, 46));\n  --color: light-dark(var(--je-neutral-900), var(--je-neutral-50));\n  --border: solid 1px light-dark(rgb(197, 200, 204), rgb(86, 87, 90));\n  --padding: var(--je-spacing-xs);\n}\n\n[part=content] {\n  position: relative;\n  width: var(--content-width, max-content);\n  max-width: var(--content-width, var(--available-width));\n  max-height: var(--content-height, var(--available-height));\n  z-index: 1;\n  border-radius: var(--je-radius-md);\n  border: var(--border);\n  overflow: auto;\n  font-family: inherit;\n  background-color: var(--background);\n  color: var(--color);\n  box-sizing: border-box;\n  padding: var(--padding);\n}\n\n[part=content-container] {\n  box-shadow: var(--je-shadow-lg);\n  opacity: 0;\n  transition:\n    opacity 0.3s ease-in-out,\n    display 0.3s ease-in-out allow-discrete;\n  background-color: transparent;\n  border: none;\n  border-radius: var(--je-radius-md);\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  overflow: visible;\n}\n\n[part=content-container]:popover-open {\n  opacity: 1;\n}\n\n[part=arrow] {\n  position: absolute;\n  background-color: var(--background);\n  border: var(--border);\n  width: 10px;\n  height: 10px;\n\n  &.bottom,\n  &.bottom-end,\n  &.bottom-start {\n    transform: translateY(-50%) rotate(45deg);\n    top: 0;\n  }\n\n  &.top,\n  &.top-end,\n  &.top-start {\n    transform: translateY(50%) rotate(45deg);\n    bottom: 0;\n  }\n\n  &.left,\n  &.left-end,\n  &.left-start {\n    transform: translateX(50%) rotate(45deg);\n    right: 0;\n  }\n\n  &.right,\n  &.right-end,\n  &.right-start {\n    transform: translateX(-50%) rotate(45deg);\n    left: 0;\n  }\n}\n\n@starting-style {\n  [part=content-container]:popover-open {\n    opacity: 0;\n  }\n}\n";

const JePopover = /*@__PURE__*/ proxyCustomElement(class JePopover extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.willPresent = createEvent(this, "willPresent", 3);
        this.present = createEvent(this, "present", 3);
        this.dismiss = createEvent(this, "dismiss", 3);
        this.willDismiss = createEvent(this, "willDismiss", 3);
        this.ready = createEvent(this, "ready", 3);
    }
    get el() { return this; }
    contentEl;
    containerEl;
    arrowEl;
    get triggerElement() {
        return this.el.querySelector(':scope > [slot=trigger]');
    }
    mouseEvent;
    role;
    data;
    cleanup;
    get referenceEl() {
        return {
            getBoundingClientRect: () => {
                if (this.positionStrategy === 'element') {
                    return (this.triggerElement ?? this.mouseEvent?.target).getBoundingClientRect();
                }
                else {
                    return new DOMRect(this.mouseEvent?.clientX, this.mouseEvent?.clientY);
                }
            }
        };
    }
    mouseSub;
    /**
     * Opens/closes the popover
     */
    open = false;
    /**
     * Where the popover should be placed
     */
    placement;
    /** Backdrop will dismiss the popover on click when enabled */
    backdropDismiss = true;
    /**
     * Popover will automatically dismiss itself when something is
     * clicked in the popover when enabled
     */
    dismissOnClick = false;
    /**
     * If the popover should position itself using the mouse event or
     * the triggerElement.
     */
    positionStrategy = 'element';
    /** Horizontal offset used when auto positioning the popover content */
    offsetX = 0;
    /** Vertical offset used when auto positioning the popover content */
    offsetY = 10;
    /**
     * @click Popover will show on left click or tap on mobile.
     * @context-menu Popover will show on right click or press on mobile.
     * @hover Popover will show on hover or tap on mobile.
     */
    triggerAction = 'click';
    /**
     * If the popover should match the width of the trigger element
     */
    matchWidth = false;
    /**
     * Renders an arrow pointing to the trigger
     */
    arrow = true;
    /**
     * Execute a callback before the popover starts presenting
     */
    init;
    /**
     * Execute a callback after the popover has dismissed
     */
    destroy;
    /**
     * The padding between the arrow and the edges of the popover. Useful if you change the border-radius of the popover
     */
    arrowPadding = 6;
    /**
     * Emits before the popover starts opening
     */
    willPresent;
    /**
     * Emits when the popover is opened
     */
    present;
    /**
     * Emits when the popover is closed
     */
    dismiss;
    /**
     * Emits before the popover starts dismissing
     */
    willDismiss;
    /**
     * Emits when the popover has completed it's initial render
     */
    ready;
    componentDidLoad() {
        this.ready.emit();
    }
    componentWillRender() {
        if (this.triggerElement && this.matchWidth) {
            this.el.style.setProperty('--content-width', `${this.triggerElement.clientWidth}px`);
        }
    }
    connectedCallback() {
        this.mouseSub = cjsExports.fromEvent(window, 'mousemove')
            .pipe(cjsExports.debounceTime(25))
            .subscribe(this.onMouseMove);
    }
    disconnectedCallback() {
        this.mouseSub?.unsubscribe();
    }
    async handleOpenChange(open) {
        if (open) {
            this.willPresent.emit();
            if (this.init) {
                await this.init();
            }
            this.setPosition(await this.computePosition());
            this.cleanup = autoUpdate(this.referenceEl, this.containerEl, () => this.computePosition().then(this.setPosition));
            this.containerEl.showPopover();
        }
        else {
            this.willDismiss.emit();
            if (this.cleanup) {
                this.cleanup();
            }
            this.containerEl.hidePopover();
        }
    }
    handleWindowClick(ev) {
        const path = ev.composedPath();
        if (this.triggerAction == 'click') {
            if (this.open) {
                if (this.backdropDismiss && !path.includes(this.containerEl)) {
                    this.hide('backdropDismiss');
                    this.open = false;
                }
                if (this.dismissOnClick && path.includes(this.containerEl)) {
                    this.open = false;
                    this.hide('clickDismiss');
                }
            }
            else {
                this.mouseEvent = ev;
                if (path.includes(this.triggerElement)) {
                    this.open = true;
                }
            }
        }
    }
    handleWindowContextMenu(ev) {
        const path = ev.composedPath();
        if (this.triggerAction == 'context-menu' && !this.open) {
            this.mouseEvent = ev;
            if (path.includes(this.triggerElement)) {
                ev.preventDefault();
                this.open = true;
            }
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
    setPosition = ({ x, y, middlewareData, placement }) => {
        if (middlewareData.arrow) {
            this.arrowEl.removeAttribute('class');
            this.arrowEl.classList.add(placement);
            if (middlewareData.arrow.x) {
                this.arrowEl.style.left = `${middlewareData.arrow.x}px`;
            }
            else if (middlewareData.arrow.y) {
                this.arrowEl.style.top = `${middlewareData.arrow.y}px`;
            }
        }
        this.containerEl.style.left = `${x}px`;
        this.containerEl.style.top = `${y}px`;
    };
    onMouseMove = (ev) => {
        const node = ev.target;
        const { triggerAction, triggerElement, el } = this;
        if (triggerAction === 'hover') {
            if ((triggerAction === 'hover' && (el.contains(node) || triggerElement?.contains(node)))) {
                this.mouseEvent = ev;
                this.open = true;
            }
            else {
                this.hide('hoverDismiss');
            }
        }
    };
    computePosition() {
        return computePosition(this.referenceEl, this.containerEl, {
            placement: this.placement,
            strategy: 'fixed',
            middleware: [
                offset({
                    mainAxis: this.offsetY,
                    crossAxis: this.offsetX,
                }),
                shift(),
                this.placement ? flip() : autoPlacement(),
                size({
                    apply: ({ availableHeight, availableWidth }) => {
                        this.contentEl.style.setProperty('--available-height', `${availableHeight - this.offsetY}px`);
                        this.contentEl.style.setProperty('--available-width', `${availableWidth - this.offsetX}px`);
                    },
                }),
                this.arrowEl
                    ? arrow({
                        element: this.arrowEl,
                        padding: this.arrowPadding,
                    })
                    : false,
            ],
        });
    }
    handleContentTransitionEnd = async (ev) => {
        if (ev.propertyName == 'opacity') {
            await new Promise(resolve => setTimeout(resolve, 300));
            if (!this.open) {
                if (this.destroy) {
                    await this.destroy();
                }
                this.dismiss.emit({ role: this.role ?? 'manualClose', data: this.data });
                this.role = undefined;
                this.data = undefined;
            }
            else {
                this.present.emit();
            }
        }
    };
    render() {
        return (h(Host, { key: 'e589379c1edeb2da207764c0fb7975f52001ab09' }, h("slot", { key: 'a9c02bda0c46f75e3f13a6095ccac07efb98c6b5', name: "trigger" }), h("div", { key: 'f9c564666a68099c28e8b9a1b6d89b2665d59a2c', part: "content-container", ref: el => this.containerEl = el, onTransitionStart: this.handleContentTransitionEnd, popover: 'manual' }, h("div", { key: '280bdd56812d6193f72018c19c4e4ba06bcd2582', ref: el => this.contentEl = el, part: "content" }, h("slot", { key: '16bc92682bbb158bab4f8cf7c9a6398e5fc1fa39' })), this.arrow && h("div", { key: '1672e9e8fdeb915cfe4c14fe7c93a9bc98d17c41', ref: el => this.arrowEl = el, part: "arrow" }))));
    }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
    static get style() { return jePopoverCss; }
}, [257, "je-popover", {
        "open": [1028],
        "placement": [1],
        "backdropDismiss": [4, "backdrop-dismiss"],
        "dismissOnClick": [4, "dismiss-on-click"],
        "positionStrategy": [1, "position-strategy"],
        "offsetX": [2, "offset-x"],
        "offsetY": [2, "offset-y"],
        "triggerAction": [1, "trigger-action"],
        "matchWidth": [4, "match-width"],
        "arrow": [4],
        "init": [16],
        "destroy": [16],
        "arrowPadding": [2, "arrow-padding"],
        "show": [64],
        "hide": [64]
    }, [[10, "click", "handleWindowClick"], [10, "contextmenu", "handleWindowContextMenu"]], {
        "open": ["handleOpenChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "je-popover":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JePopover);
            }
            break;
    } });
}

export { JePopover as J, defineCustomElement as d };
//# sourceMappingURL=p-BjkI2DXD.js.map

//# sourceMappingURL=p-BjkI2DXD.js.map