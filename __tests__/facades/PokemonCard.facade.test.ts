import { PokemonCard } from '../../src/facades/PokemonCard.facade'
import { PokemonFactory } from '../../__factories__/PokemonFactory'
import { getTeam } from '../../src/utils/TeamHelpers'
import AsyncStorage from '@react-native-async-storage/async-storage'

const pokemon = PokemonFactory.create()
const card = new PokemonCard(pokemon)

afterEach(() => AsyncStorage.clear())

describe('.addToTeam', () => {
  it('adds card to the team', async () => {
    await card.addToTeam()

    const team = await getTeam()
    expect(team).toContainEqual(card)
  })

  describe('when already on the team', () => {
    beforeEach(() => card.addToTeam())

    it('does not add the card again', async () => {
      await card.addToTeam()

      const team = await getTeam()
      expect(team.length).toStrictEqual(1)
      expect(team).toContainEqual(card)
    })
  })
})

describe('.isInTeam', () => {
  describe('when in team', () => {
    beforeEach(() => card.addToTeam())

    it('returns true', (done) => {
      const callback = (inTeam: boolean) => {
        expect(inTeam).toStrictEqual(true)
        done()
      }

      card.isInTeam(callback)
    })
  })

  describe('when not in team', () => {
    it('returns false', (done) => {
      const callback = (inTeam: boolean) => {
        expect(inTeam).toStrictEqual(false)
        done()
      }

      card.isInTeam(callback)
    })
  })
})

describe('.removeFromTeam', () => {
  beforeEach(() => card.addToTeam())

  it('removes card from the team', async () => {
    await card.removeFromTeam()

    const team = await getTeam()
    expect(team).toStrictEqual([])
  })
})
