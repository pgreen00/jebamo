import type { Components, JSX } from "../dist/types/components";

interface JeToggle extends Components.JeToggle, HTMLElement {}
export const JeToggle: {
    prototype: JeToggle;
    new (): JeToggle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
