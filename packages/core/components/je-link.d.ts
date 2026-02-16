import type { Components, JSX } from "../dist/types/components";

interface JeLink extends Components.JeLink, HTMLElement {}
export const JeLink: {
    prototype: JeLink;
    new (): JeLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
