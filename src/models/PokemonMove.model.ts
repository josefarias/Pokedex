import { enforceDataIntegrity } from 'utils/DataIntegrityHelpers'
import { extractFromNestedResource, getIdFromUrl } from 'utils/PokeApiHelpers'
import { titleize } from 'utils/StringHelpers'
import { IServerPokemonType,
         PokemonType,
         defaultValues as PokemonTypeDefaults,
         EMPTY_POKEMON_TYPE } from './PokemonType.model'

export interface IServerPokemonMove {
  id?: number
  name: string
  accuracy?: number
  power?: number
  url: string
  type?: IServerPokemonType
  move?: IServerPokemonMove
}

export class PokemonMove {
  id: number
  name: string
  accuracy?: number
  power?: number
  url: string
  type: PokemonType

  constructor(attrs: IServerPokemonMove) {
    this.url      = extractFromNestedResource(attrs, 'move', 'url')
    this.id       = attrs.id || getIdFromUrl(this.url)
    this.name     = titleize(attrs.name || extractFromNestedResource(attrs, 'move', 'name'))
    this.accuracy = attrs.accuracy
    this.power    = attrs.power
    this.type     = attrs.type ? new PokemonType(attrs.type) : EMPTY_POKEMON_TYPE

    enforceDataIntegrity(this, defaultValues)
  }
}

const defaultValues: IServerPokemonMove = {
  id: 0,
  name: '',
  accuracy: 0,
  power: 0,
  url: '',
  type: PokemonTypeDefaults
}

export const EMPTY_POKEMON_MOVE = new PokemonMove(defaultValues)
