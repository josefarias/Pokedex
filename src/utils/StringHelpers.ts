export function titleize(str: string): string {
  return str.trim()
            .toLowerCase()
            .replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
}
