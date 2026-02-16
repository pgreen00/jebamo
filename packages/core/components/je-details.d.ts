import type { Components, JSX } from "../dist/types/components";

interface JeDetails extends Components.JeDetails, HTMLElement {}
export const JeDetails: {
    prototype: JeDetails;
    new (): JeDetails;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
