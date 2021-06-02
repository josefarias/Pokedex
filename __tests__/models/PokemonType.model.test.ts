import { Colors } from 'utils/Colors'
import { PokemonTypeFactory } from '../../__factories__/PokemonTypeFactory'

const pokemonType = PokemonTypeFactory.create()

describe('.color', () => {
  it('returns expected color', () => {
    expect(pokemonType.color).toStrictEqual(Colors[pokemonType.name.toLocaleLowerCase()])
  })
})
