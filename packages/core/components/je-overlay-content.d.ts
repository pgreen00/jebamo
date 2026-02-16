import type { Components, JSX } from "../dist/types/components";

interface JeOverlayContent extends Components.JeOverlayContent, HTMLElement {}
export const JeOverlayContent: {
    prototype: JeOverlayContent;
    new (): JeOverlayContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
