import { p as proxyCustomElement, H, c as createEvent, h, F as Fragment, d as Host } from './p-BE32ZzHI.js';
import { d as dateFnsExports } from './p-iWCgRMLC.js';
import { d as defineCustomElement$6 } from './p-Bq6w2KBv.js';
import { d as defineCustomElement$5 } from './p-CRZ_8E-L.js';
import { d as defineCustomElement$4 } from './p-C_N6ZFok.js';
import { d as defineCustomElement$3 } from './p-DreSRLyw.js';
import { d as defineCustomElement$2 } from './p-BjkI2DXD.js';

const jeDatepickerCss = ":host {\n  display: flex;\n  padding: var(--je-spacing-xs);\n  box-sizing: border-box;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: var(--je-spacing-sm);\n}\n\nje-button.day {\n  --height: var(--je-spacing-2xl);\n  --padding-inline: 0px;\n\n  &::part(inner-button) {\n    width: var(--je-spacing-2xl);\n    font-weight: 400;\n  }\n}\n\n.header {\n  width: 100%;\n  min-width: 200px;\n  max-width: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  span {\n    flex: 1;\n    text-align: center;\n  }\n}\n\n.weekdays-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: var(--je-spacing-2xs);\n\n  div {\n    height: var(--je-spacing-2xl);\n    width: var(--je-spacing-2xl);\n    font-size: var(--je-font-md);\n    font-weight: 400;\n    color: var(--je-neutral-600);\n    text-align: center;\n    align-content: center;\n  }\n}\n\n.days-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: var(--je-spacing-2xs);\n}\n\n.timepicker {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  min-width: 200px;\n  max-width: 300px;\n}\n\n.timepicker-content {\n  display: flex;\n}\n\n.timepicker-column {\n  display: flex;\n  flex-direction: column;\n  gap: var(--je-spacing-2xs);\n  height: 200px;\n  overflow: auto;\n  align-items: center;\n  padding: var(--je-spacing-xs);\n  box-sizing: border-box;\n}\n";

const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const JeDatepicker$1 = /*@__PURE__*/ proxyCustomElement(class JeDatepicker extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.valueChange = createEvent(this, "valueChange", 7);
    }
    get el() { return this; }
    currentDate = new Date();
    type = 'datetime';
    includeSeconds = false;
    min;
    max;
    isDateDisabled;
    value;
    valueChange;
    componentWillLoad() {
        if (this.value) {
            this.currentDate = new Date(this.value);
        }
    }
    valueChangeHandler() {
        if (this.value) {
            this.currentDate = new Date(this.value);
        }
    }
    nextMonth = () => {
        this.currentDate = dateFnsExports.addMonths(this.currentDate, 1);
    };
    prevMonth = () => {
        this.currentDate = dateFnsExports.subMonths(this.currentDate, 1);
    };
    nextYear = () => {
        this.currentDate = dateFnsExports.addMonths(this.currentDate, 12);
    };
    prevYear = () => {
        this.currentDate = dateFnsExports.subMonths(this.currentDate, 12);
    };
    setValue = (opts) => {
        const newValue = dateFnsExports.set(this.value ?? new Date(), {
            year: opts.day?.getFullYear(),
            month: opts.day?.getMonth(),
            date: opts.day?.getDate(),
            hours: opts.hour,
            minutes: opts.minute,
            seconds: opts.second
        });
        this.value = newValue.getTime();
        this.valueChange.emit(this.value);
    };
    scrollTimeIntoView = () => {
        this.el.shadowRoot.querySelectorAll('.timepicker-column').forEach(column => {
            column.querySelector('je-button[color="primary"][fill="solid"]')
                ?.shadowRoot.querySelector('button')
                ?.scrollIntoView({ block: 'center', behavior: 'instant' });
        });
    };
    render() {
        const firstDayOfMonth = dateFnsExports.startOfMonth(this.currentDate);
        const lastDayOfMonth = dateFnsExports.endOfMonth(this.currentDate);
        const daysInMonth = dateFnsExports.eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });
        const prevMonth = dateFnsExports.subMonths(this.currentDate, 1);
        const prevMonthEnd = dateFnsExports.endOfMonth(prevMonth);
        const firstDayOfWeek = dateFnsExports.getDay(firstDayOfMonth);
        const daysBefore = Array.from({ length: firstDayOfWeek }).map((_, i) => dateFnsExports.subMonths(this.currentDate, 1).setDate(prevMonthEnd.getDate() - (firstDayOfWeek - i - 1)));
        const lastDayOfWeek = dateFnsExports.getDay(lastDayOfMonth);
        const daysAfter = Array.from({ length: 6 - lastDayOfWeek }).map((_, i) => dateFnsExports.addMonths(this.currentDate, 1).setDate(i + 1));
        return (h(Host, { key: 'dd82d2818b72580f9aa63ce0b2d6cb595d8f58d8' }, (this.type == 'date' || this.type == 'datetime') && (h(Fragment, { key: '3c9e8e93e703d0509fcc2e4b1d0ca800fa55128f' }, h("div", { key: 'd21e1c7c0699a1144bf47b42ef210517760ccf1f', class: "header" }, h("je-button", { key: '0b395186dd72a4a042a0471d5423ef3f8be1babc', size: 'sm', onClick: this.prevYear }, h("je-icon", { key: '33bccc55ee70ae0186d0194a71b3d617ebd2aa85' }, "keyboard_double_arrow_left")), h("je-button", { key: 'f0e964f5dcb25d2e4444cc746d593efdf1d15f1a', size: 'sm', onClick: this.prevMonth }, h("je-icon", { key: '3d2a2416d53d226e6032258fc0ebba6c0a7b99cf' }, "keyboard_arrow_left")), h("span", { key: '9873c62ad389f11e6d01260b6ff9f0cba2128e09' }, dateFnsExports.format(this.currentDate, 'MMMM yyyy')), h("je-button", { key: '29698d976f1bba0e61e218546c0ddcd7fa582d25', size: 'sm', onClick: this.nextMonth }, h("je-icon", { key: '2c6f5f7fc25e21a0fbf9a06e37cf8b3f9ed7a78b' }, "keyboard_arrow_right")), h("je-button", { key: 'b10d703dc8bf73bbd844e24fc701ffb089ed1ef0', size: 'sm', onClick: this.nextYear }, h("je-icon", { key: '31debc65c8bae9ffd3947ab30266f885ff1ba1bc' }, "keyboard_double_arrow_right"))), h("div", { key: '3531058f0a26765592d60997c356862f21ef9e8c', class: "weekdays-grid" }, daysOfWeek.map(day => h("div", null, day))), h("div", { key: 'b6e660d0c790456df082b51b95651319c8b6b52c', class: "days-grid" }, daysBefore.map(day => (h("je-button", { expand: true, disabled: true, fill: 'clear', class: 'day' }, dateFnsExports.format(day, 'd')))), daysInMonth.map(day => {
            const selected = this.value && dateFnsExports.isSameDay(day, this.value);
            const today = dateFnsExports.isToday(day);
            const isDisabled = (this.isDateDisabled && this.isDateDisabled(day)) || (this.min && day < new Date(this.min)) || (this.max && day > new Date(this.max));
            return (h("je-button", { expand: true, disabled: isDisabled, color: selected || today ? 'primary' : undefined, fill: selected ? 'solid' : 'clear', class: 'day', onClick: () => this.setValue({ day }) }, dateFnsExports.format(day, 'd')));
        }), daysAfter.map(day => (h("je-button", { expand: true, disabled: true, fill: 'clear', class: 'day' }, dateFnsExports.format(day, 'd'))))))), (this.type == 'time' || this.type == 'datetime') && (h("div", { key: '4e65c6c8b6af41a997eebe0296edf8451f1245de', class: 'timepicker' }, h("span", { key: 'd015807292225ab76003ec9bcb0e4d52cdaa3719' }, "Time"), h("je-popover", { key: 'dec213b0f011fb6aedbf28b175e000b795326a3d', arrow: true, onPresent: this.scrollTimeIntoView }, h("je-pill", { key: '23058326412fc2bc6351b28bf73d783e32cc80aa', role: 'button', tabindex: 0, slot: 'trigger' }, this.value ? (this.includeSeconds ? dateFnsExports.format(this.value, 'hh:mm:ss a') : dateFnsExports.format(this.value, 'hh:mm a')) : '-'), h("div", { key: '891af9cb9c83db1474958fdaa9f382d8d29ba8b5', class: 'timepicker-content' }, h("div", { key: 'd8f46ef40ec54898b3f611eac1af94cbc6015e98', class: 'timepicker-column' }, Array.from({ length: 24 }).map((_, hour) => (h("je-button", { size: 'sm', color: this.currentDate.getHours() === hour ? 'primary' : undefined, fill: this.currentDate.getHours() === hour ? 'solid' : 'clear', onClick: () => this.setValue({ hour }) }, dateFnsExports.format(new Date().setHours(hour), 'hh a'))))), h("div", { key: '079af7b8336c757ff597bc6cf0c099fe92f3a8b5', class: 'timepicker-column' }, Array.from({ length: 60 }).map((_, minute) => (h("je-button", { size: 'sm', color: this.currentDate.getMinutes() === minute ? 'primary' : undefined, fill: this.currentDate.getMinutes() === minute ? 'solid' : 'clear', onClick: () => this.setValue({ minute }) }, dateFnsExports.format(new Date().setMinutes(minute), 'mm'))))), this.includeSeconds && (h("div", { key: '99f7bd5bec3156ae354314127e484930ece2328c', class: 'timepicker-column' }, Array.from({ length: 60 }).map((_, second) => (h("je-button", { size: 'sm', color: this.currentDate.getSeconds() === second ? 'primary' : undefined, fill: this.currentDate.getSeconds() === second ? 'solid' : 'clear', onClick: () => this.setValue({ second }) }, dateFnsExports.format(new Date().setSeconds(second), 'ss'))))))))))));
    }
    static get watchers() { return {
        "value": ["valueChangeHandler"]
    }; }
    static get style() { return jeDatepickerCss; }
}, [257, "je-datepicker", {
        "type": [1],
        "includeSeconds": [4, "include-seconds"],
        "min": [2],
        "max": [2],
        "isDateDisabled": [16],
        "value": [1026],
        "currentDate": [32]
    }, undefined, {
        "value": ["valueChangeHandler"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["je-datepicker", "je-button", "je-icon", "je-loading", "je-pill", "je-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "je-datepicker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JeDatepicker$1);
            }
            break;
        case "je-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "je-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "je-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "je-pill":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "je-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const JeDatepicker = JeDatepicker$1;
const defineCustomElement = defineCustomElement$1;

export { JeDatepicker, defineCustomElement };
//# sourceMappingURL=je-datepicker.js.map

//# sourceMappingURL=je-datepicker.js.map