import { enforceDataIntegrity } from 'utils/DataIntegrityHelpers'
import { IServerPokemonType, PokemonType } from './PokemonType.model'

export interface IServerDamageRelations {
  no_damage_to: Array<IServerPokemonType>
  half_damage_to: Array<IServerPokemonType>
  double_damage_to: Array<IServerPokemonType>
  no_damage_from: Array<IServerPokemonType>
  half_damage_from: Array<IServerPokemonType>
  double_damage_from: Array<IServerPokemonType>
}

export class DamageRelations {
  noDamageTo: Array<PokemonType>
  halfDamageTo: Array<PokemonType>
  doubleDamageTo: Array<PokemonType>
  noDamagefrom: Array<PokemonType>
  halfDamagefrom: Array<PokemonType>
  doubleDamagefrom: Array<PokemonType>

  constructor(attrs: IServerDamageRelations) {
    this.noDamageTo       = this.constructPokemonTypes(attrs && attrs.no_damage_to)
    this.halfDamageTo     = this.constructPokemonTypes(attrs && attrs.half_damage_to)
    this.doubleDamageTo   = this.constructPokemonTypes(attrs && attrs.double_damage_to)
    this.noDamagefrom     = this.constructPokemonTypes(attrs && attrs.no_damage_from)
    this.halfDamagefrom   = this.constructPokemonTypes(attrs && attrs.half_damage_from)
    this.doubleDamagefrom = this.constructPokemonTypes(attrs && attrs.double_damage_from)

    enforceDataIntegrity(this, defaultValues)
  }

  private constructPokemonTypes(serverTypes: Array<IServerPokemonType> = []): Array<PokemonType> {
    return serverTypes.map((serverType: IServerPokemonType) => new PokemonType(serverType))
  }
}

export const defaultValues: IServerDamageRelations = {
  no_damage_to: [],
  half_damage_to: [],
  double_damage_to: [],
  no_damage_from: [],
  half_damage_from: [],
  double_damage_from: []
}

export const DAMAGE_RELATION_TITLE_MAPPINGS = {
  noDamageTo: 'No Damage To',
  halfDamageTo: 'Half Damage To',
  doubleDamageTo: 'Double Damage To',
  noDamagefrom: 'No Damage From',
  halfDamagefrom: 'Half Damage From',
  doubleDamagefrom: 'Double Damage From'
}

export const EMPTY_DAMAGE_RELATIONS = new DamageRelations(defaultValues)
