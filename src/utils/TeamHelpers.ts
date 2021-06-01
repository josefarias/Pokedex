import AsyncStorage from '@react-native-async-storage/async-storage'
import { PokemonCard } from 'facades/PokemonCard.facade'

const TEAM_MEMBERS_STORAGE_KEY = '@pokemonTeamMembers'

export async function getTeam(): Promise<Array<PokemonCard>> {
  try {
    const value = await AsyncStorage.getItem(TEAM_MEMBERS_STORAGE_KEY)

    if (!value) return []

    return JSON.parse(value) as Array<PokemonCard>
  } catch(e) {
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
