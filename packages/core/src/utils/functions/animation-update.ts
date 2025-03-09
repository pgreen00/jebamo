export const animationUpdate = () => new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
