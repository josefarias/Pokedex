import { EMPTY_POKEMON, IServerPokemon, Pokemon } from '../../src/models/Pokemon.model'

describe('.enforceDataIntegrity', () => {
  it('assignts default values to undefined properties', () => {
    const serverResponse: IServerPokemon = {
      id: undefined,
      name: undefined,
      url: undefined,
      types: undefined,
      stats: undefined,
      moves: undefined
    }
    const pokemon = new Pokemon(serverResponse)
    const emptyPokemon = EMPTY_POKEMON

    Object.keys(pokemon).forEach((key) => {
      expect(pokemon[key]).toStrictEqual(emptyPokemon[key])
    })
  })
})
