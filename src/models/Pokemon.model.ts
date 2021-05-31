import { titleize } from 'utils/StringHelpers'
import { getIdFromUrl } from 'utils/PokeApiHelpers'
import { IServerPokemonType, PokemonType } from './PokemonType.model'
import { IServerPokemonStat, PokemonStat } from './PokemonStat.model'
import { Colors } from 'utils/Colors'
import { enforceDataIntegrity } from 'utils/DataIntegrityHelpers'

export interface IPokemon {
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

  constructor(attrs: IPokemon) {
    this.id    = attrs.id || getIdFromUrl(attrs.url)
    this.name  = titleize(attrs.name)
    this.url   = attrs.url
    this.types = this.constructTypes(attrs.types)
    this.stats = this.constructStats(attrs.stats)

    enforceDataIntegrity(this, defaultValues)
  }

  get color(): string {
    if (!this.types.length) return Colors.charcoal

    return Colors[this.types[0].name.toLowerCase()]
  }

  private constructStats(serverStats: Array<IServerPokemonStat> = []): Array<PokemonStat> {
    return serverStats.map((serverStat: IServerPokemonStat) => new PokemonStat(serverStat))
  }

  private constructTypes(serverTypes: Array<IServerPokemonType> = []): Array<PokemonType> {
    return serverTypes.map((serverType: IServerPokemonType) => new PokemonType(serverType))
  }
}

const defaultValues: IPokemon = {
  id: 0,
  name: '',
  url: '',
  types: [],
  stats: []
}

export const EmptyPokemon = new Pokemon(defaultValues)
