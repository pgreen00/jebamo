import type { Components, JSX } from "../dist/types/components";

interface JeTree extends Components.JeTree, HTMLElement {}
export const JeTree: {
    prototype: JeTree;
    new (): JeTree;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
