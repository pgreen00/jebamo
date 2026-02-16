import type { Components, JSX } from "../dist/types/components";

interface JeNote extends Components.JeNote, HTMLElement {}
export const JeNote: {
    prototype: JeNote;
    new (): JeNote;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
