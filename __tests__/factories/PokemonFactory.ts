import { Pokemon } from '../../src/models/Pokemon.model'

export class PokemonFactory extends Pokemon {
  static create(): Pokemon {
    return new Pokemon({
      id: 1,
      name: 'bulbasaur',
      url: 'localhost:3000/api/v2/pokemon/1',
      types: [
        {
          name: 'grass',
          url: 'localhost:3000/api/v2/type/12/'
        }
      ],
      stats: [
        {
          base_stat: 45,
          name: 'hp',
          url: 'localhost:3000/api/v2/stat/1/'
        }
      ],
      moves: [
        {
          name: 'razor-wind',
          url: 'localhost:3000/api/v2/move/13/'
        }
      ]
    })
  }
}
