export interface IServerPokemonType {
  slot: number
  type: IPokemonType
}

export interface IPokemonType {
  name: string
}

export class PokemonType {
  name: string

  constructor(attrs: IPokemonType) {
    this.name = attrs.name
  }
}
