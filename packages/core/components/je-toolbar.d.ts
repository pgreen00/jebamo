import type { Components, JSX } from "../dist/types/components";

interface JeToolbar extends Components.JeToolbar, HTMLElement {}
export const JeToolbar: {
    prototype: JeToolbar;
    new (): JeToolbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
