import { titleize } from 'utils/StringHelpers'
import { getIdFromUrl } from 'utils/PokeApiHelpers'
import { IServerPokemonType, PokemonType } from './PokemonType.model'
import { IServerPokemonStat, PokemonStat } from './PokemonStat.model'
import { Colors } from 'utils/Colors'
import { enforceDataIntegrity } from 'utils/DataIntegrityHelpers'

export interface IServerPokemon {
  id: number
  name: string
  url: string
  types: Array<IServerPokemonType>
  stats: Array<IServerPokemonStat>
}

export class Pokemon {
  id: number
  name: string
  url: string
  types: Array<PokemonType>
  stats: Array<PokemonStat>

  constructor(attrs: IServerPokemon) {
    this.id    = attrs.id || getIdFromUrl(attrs.url)
    this.name  = titleize(attrs.name)
    this.url   = attrs.url
    this.types = this.constructTypes(attrs.types)
    this.stats = this.constructStats(attrs.stats)

    enforceDataIntegrity(this, defaultValues)
  }

  get color(): string {
    if (!this.types.length) return Colors.charcoal

    return this.types[0].color
  }

  private constructStats(serverStats: Array<IServerPokemonStat> = []): Array<PokemonStat> {
    return serverStats.map((serverStat: IServerPokemonStat) => new PokemonStat(serverStat))
  }

  private constructTypes(serverTypes: Array<IServerPokemonType> = []): Array<PokemonType> {
    return serverTypes.map((serverType: IServerPokemonType) => new PokemonType(serverType))
  }
}

const defaultValues: IServerPokemon = {
  id: 0,
  name: '',
  url: '',
  types: [],
  stats: []
}

export const EMPTY_POKEMON = new Pokemon(defaultValues)
