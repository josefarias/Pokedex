import { titleize } from 'utils/StringHelpers'

export interface IPokemon {
  name: string
  url: string
}

export class Pokemon {
  id: number
  name: string
  url: string

  constructor(attrs: IPokemon) {
    this.id   = this.getIdFromUrl(attrs.url)
    this.name = titleize(attrs.name)
    this.url  = attrs.url
  }

  private getIdFromUrl(url: string): number {
    const tokenizedUrl = url.split('/')
    return parseInt(tokenizedUrl[tokenizedUrl.length - 2])
  }
}
