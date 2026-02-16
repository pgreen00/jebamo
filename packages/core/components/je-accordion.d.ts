import type { Components, JSX } from "../dist/types/components";

interface JeAccordion extends Components.JeAccordion, HTMLElement {}
export const JeAccordion: {
    prototype: JeAccordion;
    new (): JeAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
