import { enforceDataIntegrity } from "utils/DataIntegrityHelpers"
import { extractFromNestedResource, getIdFromUrl } from "utils/PokeApiHelpers"
import { titleize } from "utils/StringHelpers"

export interface IServerPokemonType {
  id: number
  name: string
  url: string
  type?: IServerPokemonType
}

export class PokemonType {
  id: number
  name: string
  url: string

  constructor(attrs: IServerPokemonType) {
    this.url  = extractFromNestedResource(attrs, 'type', 'url')
    this.id   = attrs.id || getIdFromUrl(this.url)
    this.name = titleize(attrs.name || extractFromNestedResource(attrs, 'type', 'name'))

    enforceDataIntegrity(this, defaultValues)
  }
}

const defaultValues: IServerPokemonType = {
  id: 0,
  name: '',
  url: ''
}
