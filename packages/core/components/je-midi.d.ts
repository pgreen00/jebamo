import type { Components, JSX } from "../dist/types/components";

interface JeMidi extends Components.JeMidi, HTMLElement {}
export const JeMidi: {
    prototype: JeMidi;
    new (): JeMidi;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
