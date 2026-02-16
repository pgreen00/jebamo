import type { Components, JSX } from "../dist/types/components";

interface JeLoading extends Components.JeLoading, HTMLElement {}
export const JeLoading: {
    prototype: JeLoading;
    new (): JeLoading;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
