import type { Components, JSX } from "../dist/types/components";

interface JeCheckbox extends Components.JeCheckbox, HTMLElement {}
export const JeCheckbox: {
    prototype: JeCheckbox;
    new (): JeCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
