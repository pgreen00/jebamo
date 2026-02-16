import type { Components, JSX } from "../dist/types/components";

interface JeIcon extends Components.JeIcon, HTMLElement {}
export const JeIcon: {
    prototype: JeIcon;
    new (): JeIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
