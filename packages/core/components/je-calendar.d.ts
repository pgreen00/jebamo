import type { Components, JSX } from "../dist/types/components";

interface JeCalendar extends Components.JeCalendar, HTMLElement {}
export const JeCalendar: {
    prototype: JeCalendar;
    new (): JeCalendar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
