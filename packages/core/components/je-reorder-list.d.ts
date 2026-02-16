import type { Components, JSX } from "../dist/types/components";

interface JeReorderList extends Components.JeReorderList, HTMLElement {}
export const JeReorderList: {
    prototype: JeReorderList;
    new (): JeReorderList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
