import type { Components, JSX } from "../dist/types/components";

interface JeWizard extends Components.JeWizard, HTMLElement {}
export const JeWizard: {
    prototype: JeWizard;
    new (): JeWizard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
