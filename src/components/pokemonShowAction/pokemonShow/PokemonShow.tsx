import { RouteProp, useNavigation, useRoute } from '@react-navigation/core'
import { API_ENDPOINTS } from 'api/endpoints'
import axios, { AxiosResponse } from 'axios'
import { ServerCommunicationError } from 'components/shared/serverCommunicationError/ServerCommunicationError'
import { Spinner } from 'components/shared/spinner/Spinner'
import { ToggleTeamMembershipButton } from 'components/shared/toggleTeamMembershipButton/ToggleTeamMembershipButton'
import { PokemonCard } from 'facades/PokemonCard.facade'
import { PokemonInfoDrawer } from 'facades/PokemonInfoDrawer.facade'
import { PokemonProfile } from 'facades/PokemonProfile.facade'
import { EMPTY_POKEMON, IServerPokemon, Pokemon } from 'models/Pokemon.model'
import React, { useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { useQuery } from 'react-query'
import { RootStackParamList } from 'routes/RootStackParamList.type'
import { InfoDrawer } from '../infoDrawer/InfoDrawer'
import { PokemonAvatar } from '../pokemonAvatar/PokemonAvatar'
import { PokemonHeader } from '../pokemonHeader/PokemonHeader'

export const PokemonShow: React.FC = () => {
  const route          = useRoute<RouteProp<RootStackParamList, 'Pokemon'>>()
  const navigation     = useNavigation()
  const pokemonProfile = useRef<PokemonProfile>(new PokemonProfile(EMPTY_POKEMON))
  const infoDrawer     = useRef<PokemonInfoDrawer>(new PokemonInfoDrawer(EMPTY_POKEMON))
  const profile        = () => pokemonProfile.current
  const drawer         = () => infoDrawer.current
  const { id }         = route.params
  const { isLoading, isError } =
    useQuery(`pokemonShow${id}`, fetchPokemon, {
      onSuccess: (data) => {
        persistPokemon(data)
        updateTeamMembershipButton()
      }
    })

  function fetchPokemon() {
    return axios.get(`${API_ENDPOINTS.contentApi}/pokemon/${id}`)
  }

  function persistPokemon(data: AxiosResponse<IServerPokemon>) {
    const pokemon = new Pokemon(data.data)
    pokemonProfile.current = new PokemonProfile(pokemon)
    infoDrawer.current = new PokemonInfoDrawer(pokemon)

    navigation.setOptions({
      headerStyle: {
        backgroundColor: pokemonProfile.current.background,
        shadowColor: 'transparent'
      }
    })
  }

  function updateTeamMembershipButton() {
    navigation.setOptions({
      headerRight: () => {
        const card = new PokemonCard(profile().pokemon)
        return <ToggleTeamMembershipButton pokemonCard={card} />
      }
    })
  }

  if (isLoading) return <Spinner />
  if (isError) return <ServerCommunicationError />

  return (
    <View style={{...styles.container, backgroundColor: profile().background}}>
      <PokemonHeader name={profile().pokemonName}
                     formattedNumber={profile().formattedNumber}
                     style={styles.header} />
      <PokemonAvatar style={styles.avatar} imageUrl={profile().imageUrl} />
      <InfoDrawer drawer={drawer()} />
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    marginTop: 48
  },
  container: {
    flex: 1,
  },
  header: {
    marginTop: 16,
    paddingHorizontal: 16
  }
})
