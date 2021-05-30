import { titleize } from 'utils/StringHelpers'
import { IServerPokemonType, PokemonType } from './PokemonType.model'

export interface IPokemon {
  id: number
  name: string
  url: string
  types: Array<IServerPokemonType>
}

export class Pokemon {
  id: number
  name: string
  url: string
  types: Array<PokemonType>

  constructor(attrs: IPokemon) {
    this.id    = attrs.id || this.getIdFromUrl(attrs.url)
    this.name  = titleize(attrs.name)
    this.url   = attrs.url
    this.types = this.constructTypes(attrs.types)
  }

  private constructTypes(serverTypes: Array<IServerPokemonType> = []): Array<PokemonType> {
    return serverTypes.map((serverType: IServerPokemonType) => {
      return new PokemonType(serverType.type)
    })
  }

  private getIdFromUrl(url: string): number {
    const tokenizedUrl = url.split('/')
    return parseInt(tokenizedUrl[tokenizedUrl.length - 2])
  }
}

export const EmptyPokemon = new Pokemon({
  id: 0,
  name: '',
  url: '',
  types: []
})
