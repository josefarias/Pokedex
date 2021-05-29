import { Pokemon } from 'models/Pokemon.model'
import { deterministicInterfaceColor } from 'utils/Colors'

export class PokemonCard {
  pokemon: Pokemon

  constructor(pokemon: Pokemon) {
    this.pokemon = pokemon
  }

  // NOTE: Background colors don't mean anything. If I had more time,
  //  I'd match it up with the Pokemon's type (`/pokemon` doesn't return
  //  that info, I'd have to work around that).
  get background(): string {
    return deterministicInterfaceColor(this.pokemon.id)
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
