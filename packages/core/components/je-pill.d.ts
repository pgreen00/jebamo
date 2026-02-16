import type { Components, JSX } from "../dist/types/components";

interface JePill extends Components.JePill, HTMLElement {}
export const JePill: {
    prototype: JePill;
    new (): JePill;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
