import type { Components, JSX } from "../dist/types/components";

interface JeAlert extends Components.JeAlert, HTMLElement {}
export const JeAlert: {
    prototype: JeAlert;
    new (): JeAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
