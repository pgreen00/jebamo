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
