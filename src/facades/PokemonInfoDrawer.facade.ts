import { Pokemon } from "models/Pokemon.model";
import { PokemonStat } from "models/PokemonStat.model";

export class PokemonInfoDrawer {
  pokemon: Pokemon

  constructor(pokemon: Pokemon) {
    this.pokemon = pokemon
  }

  get activeSegmentBackgroundColor(): string {
    return this.pokemon.color
  }

  get stats(): Array<PokemonStat> {
    return this.pokemon.stats
  }

  get color(): string {
    return this.pokemon.color
  }
}
