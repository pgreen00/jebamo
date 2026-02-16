import type { Components, JSX } from "../dist/types/components";

interface JeLabel extends Components.JeLabel, HTMLElement {}
export const JeLabel: {
    prototype: JeLabel;
    new (): JeLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
