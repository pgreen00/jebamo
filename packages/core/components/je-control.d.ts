import type { Components, JSX } from "../dist/types/components";

interface JeControl extends Components.JeControl, HTMLElement {}
export const JeControl: {
    prototype: JeControl;
    new (): JeControl;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
