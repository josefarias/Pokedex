import { enforceDataIntegrity } from 'utils/DataIntegrityHelpers'
import { extractFromNestedResource, getIdFromUrl } from 'utils/PokeApiHelpers'
import { titleize } from 'utils/StringHelpers'

export interface IServerPokemonStat {
  id: number
  base_stat: number
  name: string
  url: string
  stat?: IServerPokemonStat
}

export class PokemonStat {
  id: number
  baseStat: number
  name: string
  url: string

  constructor(attrs: IServerPokemonStat) {
    this.url      = extractFromNestedResource(attrs, 'stat', 'url')
    this.id       = attrs.id || getIdFromUrl(this.url)
    this.name     = titleize(attrs.name || extractFromNestedResource(attrs, 'stat', 'name'))
    this.baseStat = attrs.base_stat

    enforceDataIntegrity(this, defaultValues)
  }
}

const defaultValues: IServerPokemonStat = {
  id: 0,
  base_stat: 0,
  name: '',
  url: ''
}
