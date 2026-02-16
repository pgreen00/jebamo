import type { Components, JSX } from "../dist/types/components";

interface JeItem extends Components.JeItem, HTMLElement {}
export const JeItem: {
    prototype: JeItem;
    new (): JeItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
