import type { Components, JSX } from "../dist/types/components";

interface JeTab extends Components.JeTab, HTMLElement {}
export const JeTab: {
    prototype: JeTab;
    new (): JeTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
