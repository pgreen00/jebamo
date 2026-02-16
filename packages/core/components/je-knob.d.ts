import type { Components, JSX } from "../dist/types/components";

interface JeKnob extends Components.JeKnob, HTMLElement {}
export const JeKnob: {
    prototype: JeKnob;
    new (): JeKnob;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
