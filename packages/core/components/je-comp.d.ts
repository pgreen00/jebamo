import type { Components, JSX } from "../dist/types/components";

interface JeComp extends Components.JeComp, HTMLElement {}
export const JeComp: {
    prototype: JeComp;
    new (): JeComp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
