import { API_ENDPOINTS } from 'api/endpoints'
import { Pokemon } from 'models/Pokemon.model'
import { deterministicInterfaceColor } from 'utils/Colors'
import { getTeam, overwriteTeam } from 'utils/TeamHelpers'

export class PokemonCard {
  pokemon: Pokemon

  constructor(pokemon: Pokemon) {
    this.pokemon = pokemon
  }

  async addToTeam() {
    const team = await getTeam()
    const actOnResult = (isInTeam: boolean) => {
      if (isInTeam) return

      team.push(this)
      overwriteTeam(team)
    }

    this.isInTeam(actOnResult)
  }

  async isInTeam(callback: (arg0: boolean) => void) {
    const team = await getTeam()
    const isPresent = !!team.find((card) => card.pokemon.id === this.id)

    callback(isPresent)
  }

  async removeFromTeam() {
    const team = await getTeam()
    const index = team.findIndex((card) => card.pokemon.id === this.id)

    if (index > -1) team.splice(index, 1);

    overwriteTeam(team)
  }

  get id(): number {
    return this.pokemon.id
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
    return `${API_ENDPOINTS.mediaApi}/images/pokemon/${this.pokemon.id}.png`
  }

  get pokemonName(): string {
    return this.pokemon.name
  }
}
