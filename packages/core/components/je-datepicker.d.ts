import type { Components, JSX } from "../dist/types/components";

interface JeDatepicker extends Components.JeDatepicker, HTMLElement {}
export const JeDatepicker: {
    prototype: JeDatepicker;
    new (): JeDatepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
