import { Colors } from 'utils/Colors'
import { PokemonTypeFactory } from '../factories/PokemonTypeFactory'

const pokemonType = PokemonTypeFactory.create()

describe('.color', () => {
  it('returns expected color', () => {
    expect(pokemonType.color).toStrictEqual(Colors[pokemonType.name.toLocaleLowerCase()])
  })
})
