import type { Components, JSX } from "../dist/types/components";

interface JeCard extends Components.JeCard, HTMLElement {}
export const JeCard: {
    prototype: JeCard;
    new (): JeCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
