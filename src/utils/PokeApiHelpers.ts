export function getIdFromUrl(url: string): number {
  const tokenizedUrl = url.split('/')
  return parseInt(tokenizedUrl[tokenizedUrl.length - 2])
}
