import type { Components, JSX } from "../dist/types/components";

interface JeRichText extends Components.JeRichText, HTMLElement {}
export const JeRichText: {
    prototype: JeRichText;
    new (): JeRichText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
