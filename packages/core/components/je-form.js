import { p as proxyCustomElement, H, c as createEvent, h } from './p-BE32ZzHI.js';
import { c as cjsExports } from './p-Bn8mRT4P.js';

const jeFormCss = ".sc-je-form-h{display:contents}form.sc-je-form{display:contents}";

const JeForm$1 = /*@__PURE__*/ proxyCustomElement(class JeForm extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.formData = createEvent(this, "formData", 7);
    }
    el$ = new cjsExports.AsyncSubject();
    sub;
    formData;
    connectedCallback() {
        this.sub = this.el$.pipe(cjsExports.switchMap(el => {
            const ev$ = cjsExports.fromEvent(el, 'invalid', { capture: true });
            return ev$.pipe(cjsExports.buffer(ev$.pipe(cjsExports.debounceTime(100))));
        })).subscribe(events => {
            const firstInvalidElement = events[0].target;
            if (firstInvalidElement && !firstInvalidElement.matches(':focus'))
                firstInvalidElement.focus();
        });
    }
    disconnectedCallback() {
        this.sub?.unsubscribe();
    }
    async onSubmit(event) {
        event.preventDefault();
        this.el$.subscribe(el => {
            const formData = new FormData(el);
            let json = {};
            for (const [key, value] of formData.entries()) {
                if (Array.isArray(json[key])) {
                    json[key].push(value);
                }
                else if (json[key]) {
                    json[key] = [json[key], value];
                }
                else {
                    json[key] = value;
                }
            }
            this.formData.emit(json);
        });
    }
    onKeydown(event) {
        if (event.key === 'Enter') {
            this.el$.subscribe(el => el.querySelector('button[type=submit]')?.click());
        }
    }
    formElementInit = (el) => {
        this.el$.next(el);
        this.el$.complete();
    };
    render() {
        return (h("form", { key: '764d09bbf18f267b2254a9d0985783866be42e19', ref: this.formElementInit }, h("slot", { key: '594ad74ad10a6ddc74de6c1421d8ff702efab96e' })));
    }
    static get style() { return jeFormCss; }
}, [262, "je-form", undefined, [[0, "submit", "onSubmit"], [0, "keydown", "onKeydown"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-form"];
    components.forEach(tagName => { switch (tagName) {
        case "je-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeForm$1);
            }
            break;
    } });
}

const JeForm = JeForm$1;
const defineCustomElement = defineCustomElement$1;

export { JeForm, defineCustomElement };
//# sourceMappingURL=je-form.js.map

//# sourceMappingURL=je-form.js.map