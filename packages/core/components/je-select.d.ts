import type { Components, JSX } from "../dist/types/components";

interface JeSelect extends Components.JeSelect, HTMLElement {}
export const JeSelect: {
    prototype: JeSelect;
    new (): JeSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
