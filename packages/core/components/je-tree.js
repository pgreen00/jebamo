import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-BE32ZzHI.js';

const jeTreeCss = ":host{display:block;box-sizing:border-box}";

const JeTree$1 = /*@__PURE__*/ proxyCustomElement(class JeTree extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.valueChange = createEvent(this, "valueChange", 7);
    }
    get element() { return this; }
    value;
    selection = 'leaf';
    indentation = false;
    valueChange;
    get branches() {
        return Array.from(this.element.querySelectorAll('je-branch'));
    }
    componentWillLoad() {
        if (this.selection == 'multiple' && !Array.isArray(this.value))
            this.value = [];
    }
    componentWillRender() {
        const { branches, selection, indentation, value } = this;
        branches.forEach(branch => {
            branch.selection = selection;
            branch.indentation = indentation;
        });
        const selectedBranch = branches.find(b => value == (b.value ?? b.label));
        if (selectedBranch && !selectedBranch.selected) {
            this.onClick({ target: selectedBranch });
        }
    }
    valueChanged() {
        this.valueChange.emit(this.value);
    }
    async onClick(event) {
        const { target } = event;
        if (this.isBranch(target)) {
            const { branches, selection } = this;
            const isLeaf = await target.isLeaf();
            if ((selection == 'leaf' && isLeaf) || selection == 'single') {
                this.value = target.value || target.label;
                branches.forEach(branch => branch.selected = this.value === (branch.value || branch.label));
            }
            else if (this.selection == 'leaf') {
                target.open = !target.open;
            }
            else if (this.selection == 'multiple') {
                target.selected = !target.selected;
                if (isLeaf && target.selected) {
                    this.value = [...this.value, (target.value || target.label)];
                }
                else if (isLeaf) {
                    this.value = this.value.filter(v => v != (target.value || target.label));
                }
                else {
                    target.querySelectorAll('je-branch').forEach(branch => branch.selected = target.selected);
                }
                this.setParents(target);
            }
        }
    }
    async onKeyup(event) {
        const { target, key } = event;
        if (this.isBranch(target)) {
            const hasChildren = !(await target.isLeaf());
            const { branches } = this;
            if (key == 'ArrowRight' && hasChildren && !target.open) {
                target.open = true;
            }
            else if (key == 'ArrowLeft' && hasChildren && target.open) {
                target.open = false;
            }
            else if (key == 'ArrowUp') {
                const index = branches.indexOf(target);
                if (index > 0) {
                    branches[index - 1].focus();
                }
            }
            else if (key == 'ArrowDown') {
                const index = branches.indexOf(target);
                if (index < branches.length - 1) {
                    branches[index + 1].focus();
                }
            }
        }
    }
    isBranch = (target) => target instanceof H && target.tagName == 'JE-BRANCH';
    async setParents(branch) {
        const parentBranch = branch.parentElement;
        if (this.isBranch(parentBranch)) {
            const children = Array.from(parentBranch.querySelectorAll('je-branch'));
            parentBranch.selected = children.every(child => child.selected) ? true : children.some(child => child.selected) ? null : false;
            this.setParents(parentBranch);
        }
    }
    render() {
        return (h(Host, { key: '84ae69fccf08f3a58822040861cd49c1f0ce8fc3' }, h("slot", { key: '787f885e1aa580f372866b42028d99c7365b419f' })));
    }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
    static get style() { return jeTreeCss; }
}, [257, "je-tree", {
        "value": [1025],
        "selection": [1],
        "indentation": [4]
    }, [[0, "click", "onClick"], [0, "keyup", "onKeyup"]], {
        "value": ["valueChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-tree"];
    components.forEach(tagName => { switch (tagName) {
        case "je-tree":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeTree$1);
            }
            break;
    } });
}

const JeTree = JeTree$1;
const defineCustomElement = defineCustomElement$1;

export { JeTree, defineCustomElement };
//# sourceMappingURL=je-tree.js.map

//# sourceMappingURL=je-tree.js.map