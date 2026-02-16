import type { Components, JSX } from "../dist/types/components";

interface JePlaceholder extends Components.JePlaceholder, HTMLElement {}
export const JePlaceholder: {
    prototype: JePlaceholder;
    new (): JePlaceholder;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
