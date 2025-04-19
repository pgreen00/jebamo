export type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

export const COLORS = {
  primary: 'var(--je-primary, #4141e8)',
  secondary: 'var(--je-secondary, #99becb)',
  success: 'var(--je-success, #22c55e)',
  warning: 'var(--je-warning, #fbbf24)',
  danger: 'var(--je-danger, #ae1818)'
} as const;
