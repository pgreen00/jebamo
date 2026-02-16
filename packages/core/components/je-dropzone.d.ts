import type { Components, JSX } from "../dist/types/components";

interface JeDropzone extends Components.JeDropzone, HTMLElement {}
export const JeDropzone: {
    prototype: JeDropzone;
    new (): JeDropzone;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
