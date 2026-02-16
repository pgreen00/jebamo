import type { Components, JSX } from "../dist/types/components";

interface JeRadio extends Components.JeRadio, HTMLElement {}
export const JeRadio: {
    prototype: JeRadio;
    new (): JeRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
