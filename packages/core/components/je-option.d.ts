import type { Components, JSX } from "../dist/types/components";

interface JeOption extends Components.JeOption, HTMLElement {}
export const JeOption: {
    prototype: JeOption;
    new (): JeOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
