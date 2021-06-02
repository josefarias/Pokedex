import { Colors } from 'utils/Colors'
import { enforceDataIntegrity } from 'utils/DataIntegrityHelpers'
import { extractFromNestedResource, getIdFromUrl } from 'utils/PokeApiHelpers'
import { titleize } from 'utils/StringHelpers'
import { DamageRelations,
         IServerDamageRelations,
         defaultValues as DamageRelationsDefaults,
         EMPTY_DAMAGE_RELATIONS } from './DamageRelations.model'

export interface IServerPokemonType {
  id: number
  name: string
  url: string
  damage_relations: IServerDamageRelations
  type?: IServerPokemonType
}

export class PokemonType {
  id: number
  name: string
  url: string
  damageRelations: DamageRelations

  constructor(attrs: IServerPokemonType) {
    this.url             = extractFromNestedResource(attrs, 'type', 'url')
    this.id              = attrs.id || getIdFromUrl(this.url)
    this.name            = titleize(attrs.name || extractFromNestedResource(attrs, 'type', 'name'))
    this.damageRelations = attrs.damage_relations ? new DamageRelations(attrs.damage_relations) : EMPTY_DAMAGE_RELATIONS

    enforceDataIntegrity(this, defaultValues)
  }

  get color(): string {
    return Colors[this.name.toLowerCase()] || Colors.charcoal
  }
}

export const defaultValues: IServerPokemonType = {
  id: 0,
  name: '',
  url: '',
  damage_relations: DamageRelationsDefaults
}

export const EMPTY_POKEMON_TYPE = new PokemonType(defaultValues)
