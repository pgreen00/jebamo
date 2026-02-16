import type { Components, JSX } from "../dist/types/components";

interface JeRange extends Components.JeRange, HTMLElement {}
export const JeRange: {
    prototype: JeRange;
    new (): JeRange;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
