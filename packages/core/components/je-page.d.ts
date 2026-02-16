import type { Components, JSX } from "../dist/types/components";

interface JePage extends Components.JePage, HTMLElement {}
export const JePage: {
    prototype: JePage;
    new (): JePage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
