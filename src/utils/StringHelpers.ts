export function camelize(text: string = '') {
  return text.replace(/^([A-Z])|[\s-_]+(\w)/g, (_match, p1, p2, _offset) => {
      if (p2) return p2.toUpperCase()
      return p1.toLowerCase()
  })
}

export function titleize(str: string = ''): string {
  return str.trim()
            .toLowerCase()
            .replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
}
