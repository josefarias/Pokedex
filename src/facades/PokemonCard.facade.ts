import { Pokemon } from 'models/Pokemon.model'

export class PokemonCard {
  pokemon: Pokemon

  constructor(pokemon: Pokemon) {
    this.pokemon = pokemon
  }

  get formattedNumber(): string {
    return `${this.pokemon.id.toString().padStart(3, '0')}`
  }

  get imageUrl(): string {
    return `https://pokeres.bastionbot.org/images/pokemon/${this.pokemon.id}.png`
  }

  get pokemonName(): string {
    return this.pokemon.name
  }
}
