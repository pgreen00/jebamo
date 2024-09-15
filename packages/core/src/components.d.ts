/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DialogButton, DialogControl } from "./components/je-alert/je-alert";
import { AsyncFormatterFn, AsyncValidationFn, FormatterFn, ValidationFn } from "./components/je-input/je-input";
import { PanelState } from "./components/je-page/je-page";
import { PositionStrategy, Target } from "./components/je-popover/je-popover";
export { DialogButton, DialogControl } from "./components/je-alert/je-alert";
export { AsyncFormatterFn, AsyncValidationFn, FormatterFn, ValidationFn } from "./components/je-input/je-input";
export { PanelState } from "./components/je-page/je-page";
export { PositionStrategy, Target } from "./components/je-popover/je-popover";
export namespace Components {
    interface JeAlert {
        /**
          * Whether or not the user can close the dialog by clicking the backdrop
         */
        "backdropClose": boolean;
        /**
          * Buttons for user interaction
         */
        "buttons"?: DialogButton[];
        /**
          * Controls that are wrapped in a form
         */
        "controls"?: DialogControl[];
        "dismiss": (role?: string, data?: any) => Promise<void>;
        /**
          * Title of the dialog
         */
        "header"?: string;
        /**
          * Icon that goes to the left of the header
         */
        "icon"?: string;
        /**
          * Message text below the title
         */
        "message"?: string;
        "present": () => Promise<void>;
        /**
          * Whether or not to render the backdrop
         */
        "showBackdrop": boolean;
        /**
          * Trigger element id
         */
        "trigger"?: string;
    }
    interface JeButton {
        /**
          * Predefined colors
         */
        "color": 'primary' | 'secondary' | 'tertiary' | 'success' | 'error' | 'warning' | 'medium' | 'light' | 'dark';
        /**
          * Disables button
         */
        "disabled": boolean;
        /**
          * Expands the button to the full width of it's container
         */
        "expand": boolean;
        /**
          * Button fill
         */
        "fill": 'solid' | 'outline' | 'clear';
        /**
          * Removes the padding, ideal for turning an icon or image into a button
         */
        "iconOnly": boolean;
        /**
          * Button size
         */
        "size": 'md' | 'lg' | 'sm';
        /**
          * Can set to submit or reset to participate in forms
         */
        "type": string;
    }
    interface JeCard {
    }
    interface JeCheckbox {
    }
    interface JeCheckboxGroup {
    }
    interface JeCheckboxOption {
    }
    interface JeColumn {
        /**
          * The size of the column, in terms of how many columns it should take up out of the total available.
         */
        "size"?: string;
        /**
          * The size of the column for lg screens, in terms of how many columns it should take up out of the total available.
         */
        "sizeLg"?: string;
        /**
          * The size of the column for md screens, in terms of how many columns it should take up out of the total available.
         */
        "sizeMd"?: string;
        /**
          * The size of the column for sm screens, in terms of how many columns it should take up out of the total available.
         */
        "sizeSm"?: string;
        /**
          * The size of the column for xl screens, in terms of how many columns it should take up out of the total available.
         */
        "sizeXl"?: string;
        /**
          * The size of the column for xs screens, in terms of how many columns it should take up out of the total available.
         */
        "sizeXs"?: string;
    }
    interface JeColumnGroup {
    }
    interface JeForm {
        /**
          * Removes the default gap between elements passed in
         */
        "gap": 'none' | 'default';
    }
    interface JeIcon {
        /**
          * Whether or not the icon should be filled
         */
        "fill"?: boolean;
        /**
          * Icon grade
         */
        "grade"?: number;
        /**
          * Google material icon name
         */
        "icon": string;
        /**
          * Size of the icon
         */
        "size": 'sm' | 'md' | 'lg' | 'xl';
        /**
          * Icon weight
         */
        "weight"?: number;
    }
    interface JeInfinite {
    }
    interface JeInput {
        /**
          * Passed to native input
         */
        "autoCapitalize": string;
        /**
          * Passed to native input
         */
        "autoComplete": string;
        /**
          * Passed to native input
         */
        "autoCorrect": 'off' | 'on';
        /**
          * Passed to native input
         */
        "autoFocus"?: boolean;
        /**
          * Optional debounce of the didInput event
         */
        "debounce": number;
        /**
          * Renders input as disabled and prevents changes
         */
        "disabled": boolean;
        /**
          * Whether or not to render a dropdown when input is focused
         */
        "dropdown": boolean;
        /**
          * Whether or not the input should expand to the full width of it's container
         */
        "expand"?: boolean;
        /**
          * Formatter function that gets applied as the user types
         */
        "format"?: FormatterFn | AsyncFormatterFn;
        "hasError": () => Promise<boolean>;
        /**
          * Helper text directly below the control
         */
        "helperText"?: string;
        /**
          * Passed to native input
         */
        "inputMode": string;
        /**
          * Text above the control
         */
        "label": string;
        "markAsTouched": () => Promise<void>;
        /**
          * Passed to native input
         */
        "max"?: number | string;
        /**
          * Passed to native input
         */
        "maxLength"?: number;
        /**
          * Passed to native input
         */
        "min"?: number | string;
        /**
          * Passed to native input
         */
        "minLength"?: number;
        /**
          * Passed to native input
         */
        "multiple": boolean;
        /**
          * Name used in form, defaults to label value if not provided
         */
        "name"?: string;
        /**
          * Will prevent changes, does not change the input's state in any way
         */
        "noTyping": boolean;
        /**
          * Passed to native input
         */
        "pattern"?: string;
        /**
          * Input placeholder text
         */
        "placeholder": string;
        /**
          * Renders input as read only and prevents changes
         */
        "readOnly": boolean;
        /**
          * Marks as required in form and adds asterisk to the end of the label
         */
        "required": boolean;
        "reset": () => Promise<void>;
        /**
          * Passed to native input
         */
        "spellcheck": boolean;
        /**
          * Passed to native input
         */
        "step"?: string;
        /**
          * Passed to native input
         */
        "type": string;
        /**
          * Custom validator functions for form participation
         */
        "validators"?: (ValidationFn | AsyncValidationFn)[];
        /**
          * Current value of the input
         */
        "value": string;
    }
    interface JeLoading {
    }
    interface JeModal {
        /**
          * Backdrop will close the modal on click when enabled
         */
        "backdropClose": boolean;
        "dismiss": (role?: string, data?: any) => Promise<void>;
        "present": () => Promise<void>;
        /**
          * Whether or not the backdrop will be visible to the user
         */
        "showBackdrop": boolean;
        /**
          * The id of the element that will present the modal on click. If not provided, you will have to manually present the modal using openModal().
         */
        "trigger"?: string;
    }
    interface JePage {
        "leftPanel": PanelState;
        "rightPanel": PanelState;
        "theme": 'light' | 'dark' | 'auto';
    }
    interface JePill {
    }
    interface JePopover {
        /**
          * Backdrop will dismiss the popover on click when enabled
         */
        "backdropDismiss": boolean;
        /**
          * Manually dismisses the popover. Role and data get passed to the didDismiss event.
         */
        "dismiss": (role?: string, data?: any) => Promise<void>;
        /**
          * Popover will automatically dismiss itself when something is clicked in the popover when enabled
         */
        "dismissOnClick": boolean;
        /**
          * Horizontal offset used when auto positioning the popover content
         */
        "offsetX": number;
        /**
          * Vertical offset used when auto positioning the popover content
         */
        "offsetY": number;
        /**
          * If the popover should auto position itself using the mouse event or the triggerElement.
         */
        "position": PositionStrategy;
        /**
          * Used internally to present the popover. Can also be used to manually present it if needed. Will auto position itself using the specified position strategy. If no target is provided, it will use the last mouse event on the window or the trigger element.
          * @param positionStrategy The strategy to use when positioning the popover
          * @param target Can optionally override the target the popover bases it's position off of
         */
        "present": <T extends PositionStrategy>(positionStrategy: T, target?: Target<T>) => Promise<void>;
        /**
          * Whether or not the backdrop will be visible to the user
         */
        "showBackdrop": boolean;
        /**
          * The id of the element that will present the menu on click. If not provided, you will have to manually present the popover using present().
         */
        "trigger"?: string;
        /**
          * @click Popover will show on left click or tap on mobile.
          * @context-menu Popover will show on right click or press on mobile.
          * @hover Popover will show on hover or tap on mobile. No backdrop will be rendered.
         */
        "triggerAction": 'click' | 'hover' | 'context-menu';
    }
    interface JeRadio {
    }
    interface JeRadioGroup {
    }
    interface JeSelect {
        "expand"?: boolean;
        "label"?: string;
        "placeholder"?: string;
        "value"?: string;
    }
    interface JeSelectOption {
    }
    interface JeSkeletonText {
        /**
          * Whether or not the component should have the animated "shimmer" effect
         */
        "animated": boolean;
    }
    interface JeTab {
    }
    interface JeTabs {
    }
    interface JeTextarea {
    }
    interface JeToast {
    }
    interface JeToggle {
    }
    interface JeToolbar {
    }
}
export interface JeAlertCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLJeAlertElement;
}
export interface JeInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLJeInputElement;
}
export interface JeModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLJeModalElement;
}
export interface JePopoverCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLJePopoverElement;
}
declare global {
    interface HTMLJeAlertElementEventMap {
        "didPresent": any;
        "didDismiss": { role: string, data: any };
        "didSubmit": SubmitEvent;
    }
    interface HTMLJeAlertElement extends Components.JeAlert, HTMLStencilElement {
        addEventListener<K extends keyof HTMLJeAlertElementEventMap>(type: K, listener: (this: HTMLJeAlertElement, ev: JeAlertCustomEvent<HTMLJeAlertElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLJeAlertElementEventMap>(type: K, listener: (this: HTMLJeAlertElement, ev: JeAlertCustomEvent<HTMLJeAlertElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLJeAlertElement: {
        prototype: HTMLJeAlertElement;
        new (): HTMLJeAlertElement;
    };
    interface HTMLJeButtonElement extends Components.JeButton, HTMLStencilElement {
    }
    var HTMLJeButtonElement: {
        prototype: HTMLJeButtonElement;
        new (): HTMLJeButtonElement;
    };
    interface HTMLJeCardElement extends Components.JeCard, HTMLStencilElement {
    }
    var HTMLJeCardElement: {
        prototype: HTMLJeCardElement;
        new (): HTMLJeCardElement;
    };
    interface HTMLJeCheckboxElement extends Components.JeCheckbox, HTMLStencilElement {
    }
    var HTMLJeCheckboxElement: {
        prototype: HTMLJeCheckboxElement;
        new (): HTMLJeCheckboxElement;
    };
    interface HTMLJeCheckboxGroupElement extends Components.JeCheckboxGroup, HTMLStencilElement {
    }
    var HTMLJeCheckboxGroupElement: {
        prototype: HTMLJeCheckboxGroupElement;
        new (): HTMLJeCheckboxGroupElement;
    };
    interface HTMLJeCheckboxOptionElement extends Components.JeCheckboxOption, HTMLStencilElement {
    }
    var HTMLJeCheckboxOptionElement: {
        prototype: HTMLJeCheckboxOptionElement;
        new (): HTMLJeCheckboxOptionElement;
    };
    interface HTMLJeColumnElement extends Components.JeColumn, HTMLStencilElement {
    }
    var HTMLJeColumnElement: {
        prototype: HTMLJeColumnElement;
        new (): HTMLJeColumnElement;
    };
    interface HTMLJeColumnGroupElement extends Components.JeColumnGroup, HTMLStencilElement {
    }
    var HTMLJeColumnGroupElement: {
        prototype: HTMLJeColumnGroupElement;
        new (): HTMLJeColumnGroupElement;
    };
    interface HTMLJeFormElement extends Components.JeForm, HTMLStencilElement {
    }
    var HTMLJeFormElement: {
        prototype: HTMLJeFormElement;
        new (): HTMLJeFormElement;
    };
    interface HTMLJeIconElement extends Components.JeIcon, HTMLStencilElement {
    }
    var HTMLJeIconElement: {
        prototype: HTMLJeIconElement;
        new (): HTMLJeIconElement;
    };
    interface HTMLJeInfiniteElement extends Components.JeInfinite, HTMLStencilElement {
    }
    var HTMLJeInfiniteElement: {
        prototype: HTMLJeInfiniteElement;
        new (): HTMLJeInfiniteElement;
    };
    interface HTMLJeInputElementEventMap {
        "valueChange": any;
    }
    interface HTMLJeInputElement extends Components.JeInput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLJeInputElementEventMap>(type: K, listener: (this: HTMLJeInputElement, ev: JeInputCustomEvent<HTMLJeInputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLJeInputElementEventMap>(type: K, listener: (this: HTMLJeInputElement, ev: JeInputCustomEvent<HTMLJeInputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLJeInputElement: {
        prototype: HTMLJeInputElement;
        new (): HTMLJeInputElement;
    };
    interface HTMLJeLoadingElement extends Components.JeLoading, HTMLStencilElement {
    }
    var HTMLJeLoadingElement: {
        prototype: HTMLJeLoadingElement;
        new (): HTMLJeLoadingElement;
    };
    interface HTMLJeModalElementEventMap {
        "didPresent": any;
        "didDismiss": { role: string, data: any };
    }
    interface HTMLJeModalElement extends Components.JeModal, HTMLStencilElement {
        addEventListener<K extends keyof HTMLJeModalElementEventMap>(type: K, listener: (this: HTMLJeModalElement, ev: JeModalCustomEvent<HTMLJeModalElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLJeModalElementEventMap>(type: K, listener: (this: HTMLJeModalElement, ev: JeModalCustomEvent<HTMLJeModalElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLJeModalElement: {
        prototype: HTMLJeModalElement;
        new (): HTMLJeModalElement;
    };
    interface HTMLJePageElement extends Components.JePage, HTMLStencilElement {
    }
    var HTMLJePageElement: {
        prototype: HTMLJePageElement;
        new (): HTMLJePageElement;
    };
    interface HTMLJePillElement extends Components.JePill, HTMLStencilElement {
    }
    var HTMLJePillElement: {
        prototype: HTMLJePillElement;
        new (): HTMLJePillElement;
    };
    interface HTMLJePopoverElementEventMap {
        "didPresent": any;
        "didDismiss": { role?: string, data?: any };
    }
    interface HTMLJePopoverElement extends Components.JePopover, HTMLStencilElement {
        addEventListener<K extends keyof HTMLJePopoverElementEventMap>(type: K, listener: (this: HTMLJePopoverElement, ev: JePopoverCustomEvent<HTMLJePopoverElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLJePopoverElementEventMap>(type: K, listener: (this: HTMLJePopoverElement, ev: JePopoverCustomEvent<HTMLJePopoverElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLJePopoverElement: {
        prototype: HTMLJePopoverElement;
        new (): HTMLJePopoverElement;
    };
    interface HTMLJeRadioElement extends Components.JeRadio, HTMLStencilElement {
    }
    var HTMLJeRadioElement: {
        prototype: HTMLJeRadioElement;
        new (): HTMLJeRadioElement;
    };
    interface HTMLJeRadioGroupElement extends Components.JeRadioGroup, HTMLStencilElement {
    }
    var HTMLJeRadioGroupElement: {
        prototype: HTMLJeRadioGroupElement;
        new (): HTMLJeRadioGroupElement;
    };
    interface HTMLJeSelectElement extends Components.JeSelect, HTMLStencilElement {
    }
    var HTMLJeSelectElement: {
        prototype: HTMLJeSelectElement;
        new (): HTMLJeSelectElement;
    };
    interface HTMLJeSelectOptionElement extends Components.JeSelectOption, HTMLStencilElement {
    }
    var HTMLJeSelectOptionElement: {
        prototype: HTMLJeSelectOptionElement;
        new (): HTMLJeSelectOptionElement;
    };
    interface HTMLJeSkeletonTextElement extends Components.JeSkeletonText, HTMLStencilElement {
    }
    var HTMLJeSkeletonTextElement: {
        prototype: HTMLJeSkeletonTextElement;
        new (): HTMLJeSkeletonTextElement;
    };
    interface HTMLJeTabElement extends Components.JeTab, HTMLStencilElement {
    }
    var HTMLJeTabElement: {
        prototype: HTMLJeTabElement;
        new (): HTMLJeTabElement;
    };
    interface HTMLJeTabsElement extends Components.JeTabs, HTMLStencilElement {
    }
    var HTMLJeTabsElement: {
        prototype: HTMLJeTabsElement;
        new (): HTMLJeTabsElement;
    };
    interface HTMLJeTextareaElement extends Components.JeTextarea, HTMLStencilElement {
    }
    var HTMLJeTextareaElement: {
        prototype: HTMLJeTextareaElement;
        new (): HTMLJeTextareaElement;
    };
    interface HTMLJeToastElement extends Components.JeToast, HTMLStencilElement {
    }
    var HTMLJeToastElement: {
        prototype: HTMLJeToastElement;
        new (): HTMLJeToastElement;
    };
    interface HTMLJeToggleElement extends Components.JeToggle, HTMLStencilElement {
    }
    var HTMLJeToggleElement: {
        prototype: HTMLJeToggleElement;
        new (): HTMLJeToggleElement;
    };
    interface HTMLJeToolbarElement extends Components.JeToolbar, HTMLStencilElement {
    }
    var HTMLJeToolbarElement: {
        prototype: HTMLJeToolbarElement;
        new (): HTMLJeToolbarElement;
    };
    interface HTMLElementTagNameMap {
        "je-alert": HTMLJeAlertElement;
        "je-button": HTMLJeButtonElement;
        "je-card": HTMLJeCardElement;
        "je-checkbox": HTMLJeCheckboxElement;
        "je-checkbox-group": HTMLJeCheckboxGroupElement;
        "je-checkbox-option": HTMLJeCheckboxOptionElement;
        "je-column": HTMLJeColumnElement;
        "je-column-group": HTMLJeColumnGroupElement;
        "je-form": HTMLJeFormElement;
        "je-icon": HTMLJeIconElement;
        "je-infinite": HTMLJeInfiniteElement;
        "je-input": HTMLJeInputElement;
        "je-loading": HTMLJeLoadingElement;
        "je-modal": HTMLJeModalElement;
        "je-page": HTMLJePageElement;
        "je-pill": HTMLJePillElement;
        "je-popover": HTMLJePopoverElement;
        "je-radio": HTMLJeRadioElement;
        "je-radio-group": HTMLJeRadioGroupElement;
        "je-select": HTMLJeSelectElement;
        "je-select-option": HTMLJeSelectOptionElement;
        "je-skeleton-text": HTMLJeSkeletonTextElement;
        "je-tab": HTMLJeTabElement;
        "je-tabs": HTMLJeTabsElement;
        "je-textarea": HTMLJeTextareaElement;
        "je-toast": HTMLJeToastElement;
        "je-toggle": HTMLJeToggleElement;
        "je-toolbar": HTMLJeToolbarElement;
    }
}
declare namespace LocalJSX {
    interface JeAlert {
        /**
          * Whether or not the user can close the dialog by clicking the backdrop
         */
        "backdropClose"?: boolean;
        /**
          * Buttons for user interaction
         */
        "buttons"?: DialogButton[];
        /**
          * Controls that are wrapped in a form
         */
        "controls"?: DialogControl[];
        /**
          * Title of the dialog
         */
        "header"?: string;
        /**
          * Icon that goes to the left of the header
         */
        "icon"?: string;
        /**
          * Message text below the title
         */
        "message"?: string;
        /**
          * Emitted when the dialog is dismissed
         */
        "onDidDismiss"?: (event: JeAlertCustomEvent<{ role: string, data: any }>) => void;
        /**
          * Emitted when the dialog is presented
         */
        "onDidPresent"?: (event: JeAlertCustomEvent<any>) => void;
        /**
          * Emitted when the inner form submission is triggered
         */
        "onDidSubmit"?: (event: JeAlertCustomEvent<SubmitEvent>) => void;
        /**
          * Whether or not to render the backdrop
         */
        "showBackdrop"?: boolean;
        /**
          * Trigger element id
         */
        "trigger"?: string;
    }
    interface JeButton {
        /**
          * Predefined colors
         */
        "color"?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'error' | 'warning' | 'medium' | 'light' | 'dark';
        /**
          * Disables button
         */
        "disabled"?: boolean;
        /**
          * Expands the button to the full width of it's container
         */
        "expand"?: boolean;
        /**
          * Button fill
         */
        "fill"?: 'solid' | 'outline' | 'clear';
        /**
          * Removes the padding, ideal for turning an icon or image into a button
         */
        "iconOnly"?: boolean;
        /**
          * Button size
         */
        "size"?: 'md' | 'lg' | 'sm';
        /**
          * Can set to submit or reset to participate in forms
         */
        "type"?: string;
    }
    interface JeCard {
    }
    interface JeCheckbox {
    }
    interface JeCheckboxGroup {
    }
    interface JeCheckboxOption {
    }
    interface JeColumn {
        /**
          * The size of the column, in terms of how many columns it should take up out of the total available.
         */
        "size"?: string;
        /**
          * The size of the column for lg screens, in terms of how many columns it should take up out of the total available.
         */
        "sizeLg"?: string;
        /**
          * The size of the column for md screens, in terms of how many columns it should take up out of the total available.
         */
        "sizeMd"?: string;
        /**
          * The size of the column for sm screens, in terms of how many columns it should take up out of the total available.
         */
        "sizeSm"?: string;
        /**
          * The size of the column for xl screens, in terms of how many columns it should take up out of the total available.
         */
        "sizeXl"?: string;
        /**
          * The size of the column for xs screens, in terms of how many columns it should take up out of the total available.
         */
        "sizeXs"?: string;
    }
    interface JeColumnGroup {
    }
    interface JeForm {
        /**
          * Removes the default gap between elements passed in
         */
        "gap"?: 'none' | 'default';
    }
    interface JeIcon {
        /**
          * Whether or not the icon should be filled
         */
        "fill"?: boolean;
        /**
          * Icon grade
         */
        "grade"?: number;
        /**
          * Google material icon name
         */
        "icon"?: string;
        /**
          * Size of the icon
         */
        "size"?: 'sm' | 'md' | 'lg' | 'xl';
        /**
          * Icon weight
         */
        "weight"?: number;
    }
    interface JeInfinite {
    }
    interface JeInput {
        /**
          * Passed to native input
         */
        "autoCapitalize"?: string;
        /**
          * Passed to native input
         */
        "autoComplete"?: string;
        /**
          * Passed to native input
         */
        "autoCorrect"?: 'off' | 'on';
        /**
          * Passed to native input
         */
        "autoFocus"?: boolean;
        /**
          * Optional debounce of the didInput event
         */
        "debounce"?: number;
        /**
          * Renders input as disabled and prevents changes
         */
        "disabled"?: boolean;
        /**
          * Whether or not to render a dropdown when input is focused
         */
        "dropdown"?: boolean;
        /**
          * Whether or not the input should expand to the full width of it's container
         */
        "expand"?: boolean;
        /**
          * Formatter function that gets applied as the user types
         */
        "format"?: FormatterFn | AsyncFormatterFn;
        /**
          * Helper text directly below the control
         */
        "helperText"?: string;
        /**
          * Passed to native input
         */
        "inputMode"?: string;
        /**
          * Text above the control
         */
        "label"?: string;
        /**
          * Passed to native input
         */
        "max"?: number | string;
        /**
          * Passed to native input
         */
        "maxLength"?: number;
        /**
          * Passed to native input
         */
        "min"?: number | string;
        /**
          * Passed to native input
         */
        "minLength"?: number;
        /**
          * Passed to native input
         */
        "multiple"?: boolean;
        /**
          * Name used in form, defaults to label value if not provided
         */
        "name"?: string;
        /**
          * Will prevent changes, does not change the input's state in any way
         */
        "noTyping"?: boolean;
        /**
          * Emits as the user types
         */
        "onValueChange"?: (event: JeInputCustomEvent<any>) => void;
        /**
          * Passed to native input
         */
        "pattern"?: string;
        /**
          * Input placeholder text
         */
        "placeholder"?: string;
        /**
          * Renders input as read only and prevents changes
         */
        "readOnly"?: boolean;
        /**
          * Marks as required in form and adds asterisk to the end of the label
         */
        "required"?: boolean;
        /**
          * Passed to native input
         */
        "spellcheck"?: boolean;
        /**
          * Passed to native input
         */
        "step"?: string;
        /**
          * Passed to native input
         */
        "type"?: string;
        /**
          * Custom validator functions for form participation
         */
        "validators"?: (ValidationFn | AsyncValidationFn)[];
        /**
          * Current value of the input
         */
        "value"?: string;
    }
    interface JeLoading {
    }
    interface JeModal {
        /**
          * Backdrop will close the modal on click when enabled
         */
        "backdropClose"?: boolean;
        /**
          * Emits whenever the modal has finished closing. Emits the role and optional data object passed to the closeModal() method.
         */
        "onDidDismiss"?: (event: JeModalCustomEvent<{ role: string, data: any }>) => void;
        /**
          * Emits whenever the modal has opened. Does not emit any data
         */
        "onDidPresent"?: (event: JeModalCustomEvent<any>) => void;
        /**
          * Whether or not the backdrop will be visible to the user
         */
        "showBackdrop"?: boolean;
        /**
          * The id of the element that will present the modal on click. If not provided, you will have to manually present the modal using openModal().
         */
        "trigger"?: string;
    }
    interface JePage {
        "leftPanel"?: PanelState;
        "rightPanel"?: PanelState;
        "theme"?: 'light' | 'dark' | 'auto';
    }
    interface JePill {
    }
    interface JePopover {
        /**
          * Backdrop will dismiss the popover on click when enabled
         */
        "backdropDismiss"?: boolean;
        /**
          * Popover will automatically dismiss itself when something is clicked in the popover when enabled
         */
        "dismissOnClick"?: boolean;
        /**
          * Horizontal offset used when auto positioning the popover content
         */
        "offsetX"?: number;
        /**
          * Vertical offset used when auto positioning the popover content
         */
        "offsetY"?: number;
        /**
          * Emits whenever the popover has finished dismissing. Emits the role and optional data object passed to the dismiss() method.
         */
        "onDidDismiss"?: (event: JePopoverCustomEvent<{ role?: string, data?: any }>) => void;
        /**
          * Emits whenever the popover has presented. Does not emit any data
         */
        "onDidPresent"?: (event: JePopoverCustomEvent<any>) => void;
        /**
          * If the popover should auto position itself using the mouse event or the triggerElement.
         */
        "position"?: PositionStrategy;
        /**
          * Whether or not the backdrop will be visible to the user
         */
        "showBackdrop"?: boolean;
        /**
          * The id of the element that will present the menu on click. If not provided, you will have to manually present the popover using present().
         */
        "trigger"?: string;
        /**
          * @click Popover will show on left click or tap on mobile.
          * @context-menu Popover will show on right click or press on mobile.
          * @hover Popover will show on hover or tap on mobile. No backdrop will be rendered.
         */
        "triggerAction"?: 'click' | 'hover' | 'context-menu';
    }
    interface JeRadio {
    }
    interface JeRadioGroup {
    }
    interface JeSelect {
        "expand"?: boolean;
        "label"?: string;
        "placeholder"?: string;
        "value"?: string;
    }
    interface JeSelectOption {
    }
    interface JeSkeletonText {
        /**
          * Whether or not the component should have the animated "shimmer" effect
         */
        "animated"?: boolean;
    }
    interface JeTab {
    }
    interface JeTabs {
    }
    interface JeTextarea {
    }
    interface JeToast {
    }
    interface JeToggle {
    }
    interface JeToolbar {
    }
    interface IntrinsicElements {
        "je-alert": JeAlert;
        "je-button": JeButton;
        "je-card": JeCard;
        "je-checkbox": JeCheckbox;
        "je-checkbox-group": JeCheckboxGroup;
        "je-checkbox-option": JeCheckboxOption;
        "je-column": JeColumn;
        "je-column-group": JeColumnGroup;
        "je-form": JeForm;
        "je-icon": JeIcon;
        "je-infinite": JeInfinite;
        "je-input": JeInput;
        "je-loading": JeLoading;
        "je-modal": JeModal;
        "je-page": JePage;
        "je-pill": JePill;
        "je-popover": JePopover;
        "je-radio": JeRadio;
        "je-radio-group": JeRadioGroup;
        "je-select": JeSelect;
        "je-select-option": JeSelectOption;
        "je-skeleton-text": JeSkeletonText;
        "je-tab": JeTab;
        "je-tabs": JeTabs;
        "je-textarea": JeTextarea;
        "je-toast": JeToast;
        "je-toggle": JeToggle;
        "je-toolbar": JeToolbar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "je-alert": LocalJSX.JeAlert & JSXBase.HTMLAttributes<HTMLJeAlertElement>;
            "je-button": LocalJSX.JeButton & JSXBase.HTMLAttributes<HTMLJeButtonElement>;
            "je-card": LocalJSX.JeCard & JSXBase.HTMLAttributes<HTMLJeCardElement>;
            "je-checkbox": LocalJSX.JeCheckbox & JSXBase.HTMLAttributes<HTMLJeCheckboxElement>;
            "je-checkbox-group": LocalJSX.JeCheckboxGroup & JSXBase.HTMLAttributes<HTMLJeCheckboxGroupElement>;
            "je-checkbox-option": LocalJSX.JeCheckboxOption & JSXBase.HTMLAttributes<HTMLJeCheckboxOptionElement>;
            "je-column": LocalJSX.JeColumn & JSXBase.HTMLAttributes<HTMLJeColumnElement>;
            "je-column-group": LocalJSX.JeColumnGroup & JSXBase.HTMLAttributes<HTMLJeColumnGroupElement>;
            "je-form": LocalJSX.JeForm & JSXBase.HTMLAttributes<HTMLJeFormElement>;
            "je-icon": LocalJSX.JeIcon & JSXBase.HTMLAttributes<HTMLJeIconElement>;
            "je-infinite": LocalJSX.JeInfinite & JSXBase.HTMLAttributes<HTMLJeInfiniteElement>;
            "je-input": LocalJSX.JeInput & JSXBase.HTMLAttributes<HTMLJeInputElement>;
            "je-loading": LocalJSX.JeLoading & JSXBase.HTMLAttributes<HTMLJeLoadingElement>;
            "je-modal": LocalJSX.JeModal & JSXBase.HTMLAttributes<HTMLJeModalElement>;
            "je-page": LocalJSX.JePage & JSXBase.HTMLAttributes<HTMLJePageElement>;
            "je-pill": LocalJSX.JePill & JSXBase.HTMLAttributes<HTMLJePillElement>;
            "je-popover": LocalJSX.JePopover & JSXBase.HTMLAttributes<HTMLJePopoverElement>;
            "je-radio": LocalJSX.JeRadio & JSXBase.HTMLAttributes<HTMLJeRadioElement>;
            "je-radio-group": LocalJSX.JeRadioGroup & JSXBase.HTMLAttributes<HTMLJeRadioGroupElement>;
            "je-select": LocalJSX.JeSelect & JSXBase.HTMLAttributes<HTMLJeSelectElement>;
            "je-select-option": LocalJSX.JeSelectOption & JSXBase.HTMLAttributes<HTMLJeSelectOptionElement>;
            "je-skeleton-text": LocalJSX.JeSkeletonText & JSXBase.HTMLAttributes<HTMLJeSkeletonTextElement>;
            "je-tab": LocalJSX.JeTab & JSXBase.HTMLAttributes<HTMLJeTabElement>;
            "je-tabs": LocalJSX.JeTabs & JSXBase.HTMLAttributes<HTMLJeTabsElement>;
            "je-textarea": LocalJSX.JeTextarea & JSXBase.HTMLAttributes<HTMLJeTextareaElement>;
            "je-toast": LocalJSX.JeToast & JSXBase.HTMLAttributes<HTMLJeToastElement>;
            "je-toggle": LocalJSX.JeToggle & JSXBase.HTMLAttributes<HTMLJeToggleElement>;
            "je-toolbar": LocalJSX.JeToolbar & JSXBase.HTMLAttributes<HTMLJeToolbarElement>;
        }
    }
}
