import type { Components, JSX } from "../dist/types/components";

interface JeTabs extends Components.JeTabs, HTMLElement {}
export const JeTabs: {
    prototype: JeTabs;
    new (): JeTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
