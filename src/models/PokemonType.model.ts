import { Colors } from "utils/Colors"
import { enforceDataIntegrity } from "utils/DataIntegrityHelpers"
import { extractFromNestedResource, getIdFromUrl } from "utils/PokeApiHelpers"
import { titleize } from "utils/StringHelpers"
import { DamageRelations, IServerDamageRelations } from "./DamageRelations.model"

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
    this.damageRelations = new DamageRelations(attrs.damage_relations)

    enforceDataIntegrity(this, defaultValues)
  }

  get color(): string {
    return Colors[this.name.toLowerCase()] || Colors.charcoal
  }
}

const defaultValues: IServerPokemonType = {
  id: 0,
  name: '',
  url: '',
  damage_relations: {
    no_damage_to: [],
    half_damage_to: [],
    double_damage_to: [],
    no_damage_from: [],
    half_damage_from: [],
    double_damage_from: []
  }
}

export const EMPTY_POKEMON_TYPE = new PokemonType(defaultValues)
