export type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

export const COLORS = {
  primary: 'var(--je-primary, #4141e8)',
  secondary: 'var(--je-secondary, #99becb)',
  success: 'var(--je-success, #22c55e)',
  warning: 'var(--je-warning, #fbbf24)',
  danger: 'var(--je-danger, #ae1818)'
} as const;

export const shade = (color: Color, shade = 500) => {
  if (shade === 500) {
    return COLORS[color];
  } else if (shade < 500) {
    const percentageToWhite = (500 - shade) / 5 / 100;
    const colorPercentage = ((1 - percentageToWhite) * 100).toFixed(2);
    const whitePercentage = (percentageToWhite * 100).toFixed(2);
    return `color-mix(in srgb, ${COLORS[color]} ${colorPercentage}%, white ${whitePercentage}%)`;
  } else if (shade > 500) {
    const percentageToBlack = (shade - 500) / 5 / 100;
    const colorPercentage = ((1 - percentageToBlack) * 100).toFixed(2);
    const blackPercentage = (percentageToBlack * 100).toFixed(2);
    return `color-mix(in srgb, ${COLORS[color]} ${colorPercentage}%, black ${blackPercentage}%)`;
  }
}
