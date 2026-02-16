import type { Components, JSX } from "../dist/types/components";

interface JeDivider extends Components.JeDivider, HTMLElement {}
export const JeDivider: {
    prototype: JeDivider;
    new (): JeDivider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
