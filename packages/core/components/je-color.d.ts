import type { Components, JSX } from "../dist/types/components";

interface JeColor extends Components.JeColor, HTMLElement {}
export const JeColor: {
    prototype: JeColor;
    new (): JeColor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
