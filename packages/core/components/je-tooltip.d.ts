import type { Components, JSX } from "../dist/types/components";

interface JeTooltip extends Components.JeTooltip, HTMLElement {}
export const JeTooltip: {
    prototype: JeTooltip;
    new (): JeTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
