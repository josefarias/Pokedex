import { RouteProp, useNavigation, useRoute } from '@react-navigation/core'
import { API_ENDPOINTS } from 'api/endpoints'
import axios, { AxiosResponse } from 'axios'
import { ServerCommunicationError } from 'components/shared/serverCommunicationError/ServerCommunicationError'
import { Spinner } from 'components/shared/spinner/Spinner'
import { PokemonInfoDrawer } from 'facades/PokemonInfoDrawer.facade'
import { PokemonProfile } from 'facades/PokemonProfile.facade'
import { EmptyPokemon, IPokemon, Pokemon } from 'models/Pokemon.model'
import React, { useLayoutEffect, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { useQuery } from 'react-query'
import { RootStackParamList } from 'routes/RootStackParamList.type'
import { InfoDrawer } from '../infoDrawer/InfoDrawer'
import { PokemonAvatar } from '../pokemonAvatar/PokemonAvatar'
import { PokemonHeader } from '../pokemonHeader/PokemonHeader'

export const PokemonShow: React.FC = () => {
  const route          = useRoute<RouteProp<RootStackParamList, 'Pokemon'>>()
  const navigation     = useNavigation()
  const pokemonProfile = useRef<PokemonProfile>(new PokemonProfile(EmptyPokemon))
  const infoDrawer     = useRef<PokemonInfoDrawer>(new PokemonInfoDrawer(EmptyPokemon))
  const profile        = () => pokemonProfile.current
  const drawer         = () => infoDrawer.current
  const { id }         = route.params
  const { isLoading, isError } =
    useQuery(`pokemonShow${id}`, fetchPokemon, {
      onSuccess: (data) => persistPokemon(data)
    })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: pokemonProfile.current.background,
        shadowColor: 'transparent'
      }
    })
  }, [navigation, pokemonProfile.current])

  function fetchPokemon() {
    return axios.get(`${API_ENDPOINTS.contentApi}/pokemon/${id}`)
  }

  function persistPokemon(data: AxiosResponse<IPokemon>) {
    const pokemon = new Pokemon(data.data)
    pokemonProfile.current = new PokemonProfile(pokemon)
    infoDrawer.current = new PokemonInfoDrawer(pokemon)
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
