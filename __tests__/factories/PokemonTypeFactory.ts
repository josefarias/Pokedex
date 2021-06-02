import { PokemonType } from '../../src/models/PokemonType.model'

export class PokemonTypeFactory {
  static create(): PokemonType {
    return new PokemonType({
      name: 'grass',
      url: 'localhost:3000/api/v2/type/12/'
    })
  }
}
