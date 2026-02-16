import type { Components, JSX } from "../dist/types/components";

interface JeReorderItem extends Components.JeReorderItem, HTMLElement {}
export const JeReorderItem: {
    prototype: JeReorderItem;
    new (): JeReorderItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
