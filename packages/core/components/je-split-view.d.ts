import type { Components, JSX } from "../dist/types/components";

interface JeSplitView extends Components.JeSplitView, HTMLElement {}
export const JeSplitView: {
    prototype: JeSplitView;
    new (): JeSplitView;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
