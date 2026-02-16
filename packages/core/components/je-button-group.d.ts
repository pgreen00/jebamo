import type { Components, JSX } from "../dist/types/components";

interface JeButtonGroup extends Components.JeButtonGroup, HTMLElement {}
export const JeButtonGroup: {
    prototype: JeButtonGroup;
    new (): JeButtonGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
