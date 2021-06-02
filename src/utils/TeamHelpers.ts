import AsyncStorage from '@react-native-async-storage/async-storage'
import { PokemonCard } from 'facades/PokemonCard.facade'

const TEAM_MEMBERS_STORAGE_KEY = '@pokemonTeamMembers'

export async function getTeam(): Promise<Array<PokemonCard>> {
  try {
    const value = await AsyncStorage.getItem(TEAM_MEMBERS_STORAGE_KEY)

    if (!value) return []

    // JSON.parse(value) as Array<PokemonCard> won't work. TS type casting is not that convenient.
    return JSON.parse(value).map((item: PokemonCard) => new PokemonCard(item.pokemon))
  } catch (e) {
    console.log(e)

    return []
  }
}

export async function overwriteTeam(team: Array<PokemonCard>): Promise<boolean> {
  try {
    const jsonValue = JSON.stringify(team)
    await AsyncStorage.setItem(TEAM_MEMBERS_STORAGE_KEY, jsonValue)

    return true
  } catch (e) {
    console.log(e)

    return false
  }
}
