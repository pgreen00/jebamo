import type { Components, JSX } from "../dist/types/components";

interface JeRadioButton extends Components.JeRadioButton, HTMLElement {}
export const JeRadioButton: {
    prototype: JeRadioButton;
    new (): JeRadioButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
