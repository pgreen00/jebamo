import type { Components, JSX } from "../dist/types/components";

interface JeSplitPanel extends Components.JeSplitPanel, HTMLElement {}
export const JeSplitPanel: {
    prototype: JeSplitPanel;
    new (): JeSplitPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
