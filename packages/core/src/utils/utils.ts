import { EventEmitter } from "@stencil/core";

export type Color = 'primary' | 'secondary' | 'tertiary' | 'success' | 'error' | 'warning' | 'medium' | 'light' | 'dark';

export const animationUpdate = () => {
  return new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
}

const debounce = (func: (...args: any[]) => void, wait = 0) => {
  let timer: any;
  return (...args: any[]): any => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};

export const debounceEvent = (event: EventEmitter, wait: number): EventEmitter => {
  const original = (event as any)._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait),
  } as EventEmitter;
};

const toCamelCase = (label: string) => {
  const words = label
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(/\s+/)
    .filter(word => word.length > 0);

  const camelCaseLabel = words
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toLowerCase() + word.slice(1);
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join("");

  return camelCaseLabel;
}

/**
 * If the name attribute is not set, it will convert the label to camel case and use that as the name.
 * @param el The element participating in the form
 * @param label Text that gets converted to the name attribute. If not defined, defaults to the element's text content.
 */
export const setName = (el: HTMLElement, label?: string) => {
  if (el.getAttribute('name') == null)
    el.setAttribute('name', toCamelCase(label || el.textContent));
}

export type FormatterFn = (newValue: string, oldValue?: string, ev?: InputEvent) => string;
export type AsyncFormatterFn = (newValue: string, oldValue?: string, ev?: InputEvent) => Promise<string>;

export type ValidationFn = (value: string) => string[];
export type AsyncValidationFn = (value: string) => Promise<string[]>;
