import type { Components, JSX } from "../dist/types/components";

interface JeSynth extends Components.JeSynth, HTMLElement {}
export const JeSynth: {
    prototype: JeSynth;
    new (): JeSynth;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
