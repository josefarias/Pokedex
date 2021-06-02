import { PokemonStat } from 'models/PokemonStat.model'

export class Stat {
  stat: PokemonStat

  constructor(stat: PokemonStat) {
    this.stat = stat
  }

  get name(): string {
    return this.stat.name
  }

  get value(): number {
    return this.stat.baseStat
  }

  // NOTE: Base stats range from values of 1 to 255
  //   per https://bulbapedia.bulbagarden.net/wiki/Base_stats
  get percentage(): number {
    return Math.round(this.stat.baseStat * 100 / 255)
  }
}
