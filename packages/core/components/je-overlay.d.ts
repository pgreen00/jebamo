import type { Components, JSX } from "../dist/types/components";

interface JeOverlay extends Components.JeOverlay, HTMLElement {}
export const JeOverlay: {
    prototype: JeOverlay;
    new (): JeOverlay;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
