export const generateShortId = (prefix = 't') => {
  const timePart = Date.now().toString(36).slice(-3);
  const randomPart = Math.random().toString(36).slice(2, 5);
  return `${prefix}-${timePart}-${randomPart}`;
}
