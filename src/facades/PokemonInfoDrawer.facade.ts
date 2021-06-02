import { Pokemon } from 'models/Pokemon.model'
import { PokemonMove } from 'models/PokemonMove.model'
import { PokemonStat } from 'models/PokemonStat.model'
import { PokemonType } from 'models/PokemonType.model'

export class PokemonInfoDrawer {
  pokemon: Pokemon

  constructor(pokemon: Pokemon) {
    this.pokemon = pokemon
  }

  get activeSegmentBackgroundColor(): string {
    return this.pokemon.color
  }

  get color(): string {
    return this.pokemon.color
  }

  get moves(): Array<PokemonMove> {
    return this.pokemon.moves
  }

  get stats(): Array<PokemonStat> {
    return this.pokemon.stats
  }

  get types(): Array<PokemonType> {
    return this.pokemon.types
  }
}
