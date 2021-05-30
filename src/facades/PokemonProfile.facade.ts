import { API_ENDPOINTS } from "api/endpoints";
import { Pokemon } from "models/Pokemon.model";
import { Colors } from "utils/Colors";

export class PokemonProfile {
  pokemon: Pokemon

  constructor(pokemon: Pokemon) {
    this.pokemon = pokemon
  }

  get background(): string {
    if (!this.pokemon.types.length) return Colors.charcoal

    return Colors[this.pokemon.types[0].name]
  }

  get formattedNumber(): string {
    return `#${this.pokemon.id.toString().padStart(3, '0')}`
  }

  get imageUrl(): string {
    return `${API_ENDPOINTS.mediaApi}/images/pokemon/${this.pokemon.id}.png`
  }

  get pokemonName(): string {
    return this.pokemon.name
  }
}
