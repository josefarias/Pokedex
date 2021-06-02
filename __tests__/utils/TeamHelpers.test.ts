import { PokemonCard } from 'facades/PokemonCard.facade'
import { overwriteTeam, getTeam } from 'utils/TeamHelpers'
import { PokemonFactory } from '../factories/PokemonFactory'
import AsyncStorage from '@react-native-async-storage/async-storage'

const pokemon = PokemonFactory.create()
const card = new PokemonCard(pokemon)

afterEach(() => {
  return AsyncStorage.clear()
})

describe('.getTeam', () => {
  it('returns an empty array when null', async () => {
    const team = await getTeam()
    expect(team).toStrictEqual([])
  })

  it('returns expected team', async () => {
    await overwriteTeam([card])

    const team = await getTeam()
    expect(team.length).toBe(1)
    expect(team).toContainEqual(card)
  })
})

describe('.overwriteTeam', () => {
  it('correctly overwrites entry', async() => {
    let team = await getTeam()
    expect(team).toStrictEqual([])

    await overwriteTeam([card])
    team = await getTeam()

    expect(team.length).toBe(1)
    expect(team).toContainEqual(card)
  })
})
