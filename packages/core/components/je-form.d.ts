import type { Components, JSX } from "../dist/types/components";

interface JeForm extends Components.JeForm, HTMLElement {}
export const JeForm: {
    prototype: JeForm;
    new (): JeForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
