import type { Components, JSX } from "../dist/types/components";

interface JeBranch extends Components.JeBranch, HTMLElement {}
export const JeBranch: {
    prototype: JeBranch;
    new (): JeBranch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
