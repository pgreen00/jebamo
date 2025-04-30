export function generateId(prefix: string) {
  let number = ''
  for (let i = 0; i < 4; i++) {
    number += Math.floor(Math.random() * 10)
  }
  return `__${prefix}-${number}`
}
