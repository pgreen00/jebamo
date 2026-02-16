import type { Components, JSX } from "../dist/types/components";

interface JeBreadcrumbs extends Components.JeBreadcrumbs, HTMLElement {}
export const JeBreadcrumbs: {
    prototype: JeBreadcrumbs;
    new (): JeBreadcrumbs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
