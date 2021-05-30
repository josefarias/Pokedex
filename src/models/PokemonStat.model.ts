import { getIdFromUrl } from 'utils/PokeApiHelpers'
import { titleize } from 'utils/StringHelpers'

export interface IServerPokemonStat {
  base_stat: number
  stat: IPokemonStat
}

export interface IPokemonStat {
  name: string
  url: string
}

export class PokemonStat {
  id: number
  baseStat: number
  name: string

  constructor(attrs: IServerPokemonStat) {
    this.id = getIdFromUrl(attrs.stat.url)
    this.baseStat = attrs.base_stat
    this.name = titleize(attrs.stat.name)
  }
}
