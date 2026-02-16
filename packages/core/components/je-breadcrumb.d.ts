import type { Components, JSX } from "../dist/types/components";

interface JeBreadcrumb extends Components.JeBreadcrumb, HTMLElement {}
export const JeBreadcrumb: {
    prototype: JeBreadcrumb;
    new (): JeBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
