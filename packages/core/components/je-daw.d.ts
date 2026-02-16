import type { Components, JSX } from "../dist/types/components";

interface JeDaw extends Components.JeDaw, HTMLElement {}
export const JeDaw: {
    prototype: JeDaw;
    new (): JeDaw;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
