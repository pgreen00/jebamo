import type { Components, JSX } from "../dist/types/components";

interface JePopover extends Components.JePopover, HTMLElement {}
export const JePopover: {
    prototype: JePopover;
    new (): JePopover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
