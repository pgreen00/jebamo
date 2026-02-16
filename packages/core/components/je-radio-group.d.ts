import type { Components, JSX } from "../dist/types/components";

interface JeRadioGroup extends Components.JeRadioGroup, HTMLElement {}
export const JeRadioGroup: {
    prototype: JeRadioGroup;
    new (): JeRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
