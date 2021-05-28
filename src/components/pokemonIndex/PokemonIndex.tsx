import React from 'react'
import axios, { AxiosPromise } from 'axios'
import { PokemonListItem } from '@components/pokemonListItem/PokemonListItem'
import { Spinner } from '@components/spinner/Spinner'
import { ServerCommunicationError } from '@components/serverCommunicationError/ServerCommunicationError'
import { Pokemon, IPokemon } from 'models/Pokemon.model'
import { StyleSheet, Text, View } from 'react-native'
import { useQuery } from 'react-query'
import { Colors } from 'utils/Colors'
import { FlatList } from 'react-native-gesture-handler'
import { PokemonCard } from 'facades/PokemonCard.facade'

export const PokemonIndex: React.FC = () => {
  const headingText                  = 'Select a Pokémon to see it up close'
  const listHeader                   = <Text style={styles.heading}>{headingText}</Text>
  const { isLoading, isError, data } = useQuery('pokemonIndex', fetchPokemonIndex)

  const pokemonRenderItem = ({ item }: { item: Pokemon }) => <PokemonListItem card={new PokemonCard(item)} />

  function fetchPokemonIndex(): AxiosPromise<any> {
    return axios('https://pokeapi.co/api/v2/pokemon')
  }

  function buildPokemonData(): Array<Pokemon> {
    return data?.data.results.map((serverPokemon: IPokemon) => {
      return new Pokemon(serverPokemon)
    })
  }

  if (isLoading) return <Spinner />
  if (isError) return <ServerCommunicationError />

  return (
    <View>
      <FlatList data={buildPokemonData()}
                renderItem={pokemonRenderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={listHeader} />
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 32,
    padding: 24,
    marginBottom: 8
  }
})
