import type { Components, JSX } from "../dist/types/components";

interface JeList extends Components.JeList, HTMLElement {}
export const JeList: {
    prototype: JeList;
    new (): JeList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
