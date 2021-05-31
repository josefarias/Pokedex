import { API_ENDPOINTS } from 'api/endpoints'
import axios, { AxiosResponse } from 'axios'
import { ServerCommunicationError } from 'components/shared/serverCommunicationError/ServerCommunicationError'
import { Spinner } from 'components/shared/spinner/Spinner'
import { EMPTY_POKEMON_MOVE, IServerPokemonMove, PokemonMove } from 'models/PokemonMove.model'
import React, { memo, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useQuery } from 'react-query'
import { Colors } from 'utils/Colors'

interface IMoveCard {
  pokemonMoveId: number
}

function MoveCard({pokemonMoveId}: IMoveCard) {
  const pokemonMove    = () => pokemonMoveRef.current
  const pokemonMoveRef = useRef<PokemonMove>(EMPTY_POKEMON_MOVE)
  const { isLoading, isError } =
    useQuery(`pokemonMoveShow${pokemonMoveId}`, fetchPokemonMove, {
      onSuccess: (data) => persistPokemonMove(data)
    })

  function fetchPokemonMove() {
    return axios.get(`${API_ENDPOINTS.contentApi}/move/${pokemonMoveId}`)
  }

  function persistPokemonMove(data: AxiosResponse<IServerPokemonMove>) {
    pokemonMoveRef.current = new PokemonMove(data.data)
  }

  if (isLoading) return <Spinner />
  if (isError) return <ServerCommunicationError />

  return(
    <View style={{...styles.container, backgroundColor: pokemonMove().type.color}}>
      <Text style={styles.title}>{pokemonMove().name}</Text>
      <Text style={styles.subtitle}>Power: {pokemonMove().power}</Text>
      <Text style={styles.subtitle}>Accuracy: {pokemonMove().accuracy}</Text>
      <Text style={styles.subtitle}>Type: {pokemonMove().type.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
    borderRadius: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.white
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white
  },
})

export const MemoizedMoveCard = memo(MoveCard)
