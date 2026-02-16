import type { Components, JSX } from "../dist/types/components";

interface JeEq extends Components.JeEq, HTMLElement {}
export const JeEq: {
    prototype: JeEq;
    new (): JeEq;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
