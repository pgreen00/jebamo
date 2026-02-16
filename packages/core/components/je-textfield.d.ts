import type { Components, JSX } from "../dist/types/components";

interface JeTextfield extends Components.JeTextfield, HTMLElement {}
export const JeTextfield: {
    prototype: JeTextfield;
    new (): JeTextfield;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
