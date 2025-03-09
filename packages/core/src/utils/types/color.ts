export type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark';

export const COLORS = {
  primary: 'var(--je-primary, #4141e8)',
  secondary: 'var(--je-secondary, #61a6c0)',
  success: 'var(--je-success, #22c55e)',
  warning: 'var(--je-warning, #fbbf24)',
  danger: 'var(--je-danger, #ef4444)',
  light: 'var(--je-medium, #a0aec0)',
  dark: 'var(--je-medium, #a0aec0)'
} as const;
