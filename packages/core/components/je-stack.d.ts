import type { Components, JSX } from "../dist/types/components";

interface JeStack extends Components.JeStack, HTMLElement {}
export const JeStack: {
    prototype: JeStack;
    new (): JeStack;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
