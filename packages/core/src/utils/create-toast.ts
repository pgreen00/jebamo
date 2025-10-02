import { Color } from "./color";

export type CreateToastOptions = {
  header?: string;
  message?: string;
  color?: Color;
  duration?: number;
  progress?: boolean;
  icon?: string;
  closable?: boolean;
  position?: 'top' | 'bottom' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
  buttons?: {
    text?: string;
    fill?: 'solid' | 'outline' | 'clear';
    color?: Color;
    size?: 'sm' | 'md' | 'lg';
    handler?: (toast: HTMLJeAlertElement) => void | Promise<void>;
  }[];
};

export const createToast = (options: CreateToastOptions) => {
  const toast = document.createElement('je-alert');
  toast.color = options.color;
  toast.duration = options.duration;
  toast.progress = options.progress;
  toast.closable = options.closable;
  toast.header = options.header;
  toast.message = options.message;
  toast.icon = options.icon;
  if (options.buttons) {
    options.buttons.forEach(button => {
      const btn = document.createElement('je-button');
      btn.textContent = button.text;
      btn.fill = button.fill;
      btn.color = button.color;
      btn.size = button.size ?? 'sm';
      btn.slot = 'buttons';
      if (button.handler) btn.addEventListener('click', () => button.handler(toast));
      toast.append(btn);
    })
  }
  let container = document.querySelector<HTMLJeToastContainerElement>(`je-toast-container[position=${options.position}]`);
  if (!container) {
    container = document.createElement('je-toast-container');
    container.position = options.position;
    document.body.append(container);
    container.popover = 'manual';
  }

  container.append(toast)
  if (!container.matches(':popover-open')) {
    container.showPopover()
  }
  toast.didDismiss().then(() => {
    toast.remove()
  })
  return toast;
}
