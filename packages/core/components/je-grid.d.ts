import type { Components, JSX } from "../dist/types/components";

interface JeGrid extends Components.JeGrid, HTMLElement {}
export const JeGrid: {
    prototype: JeGrid;
    new (): JeGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
