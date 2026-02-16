import type { Components, JSX } from "../dist/types/components";

interface JeButton extends Components.JeButton, HTMLElement {}
export const JeButton: {
    prototype: JeButton;
    new (): JeButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
