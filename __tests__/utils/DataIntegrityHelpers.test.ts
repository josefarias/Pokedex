import { EMPTY_POKEMON, IServerPokemon, Pokemon } from '../../src/models/Pokemon.model'

describe('.enforceDataIntegrity', () => {
  it('assignts default values to undefined properties', () => {
    const serverResponse: IServerPokemon = { // @ts-ignore
      id: undefined, // @ts-ignore
      name: undefined, // @ts-ignore
      url: undefined, // @ts-ignore
      types: undefined, // @ts-ignore
      stats: undefined, // @ts-ignore
      moves: undefined
    }
    const pokemon = new Pokemon(serverResponse)
    const emptyPokemon = EMPTY_POKEMON

    Object.keys(pokemon).forEach((key) => { // @ts-ignore
      expect(pokemon[key]).toStrictEqual(emptyPokemon[key])
    })
  })
})
