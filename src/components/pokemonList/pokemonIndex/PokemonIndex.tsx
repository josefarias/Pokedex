import React, { useRef } from 'react'
import { MemoizedPokemonListItem } from '@components/pokemonList/pokemonListItem/PokemonListItem'
import { Spinner } from '@components/shared/spinner/Spinner'
import { ServerCommunicationError } from '@components/shared/serverCommunicationError/ServerCommunicationError'
import { Pokemon, IPokemon } from 'models/Pokemon.model'
import { StyleSheet, Text, View } from 'react-native'
import { useInfiniteQuery } from 'react-query'
import { Colors } from 'utils/Colors'
import { FlatList } from 'react-native-gesture-handler'
import { PokemonCard } from 'facades/PokemonCard.facade'
import axios from 'axios'

export const PokemonIndex: React.FC = () => {
  const getMorePokemon  = () => fetchNextPage()
  const paginationLimit = 60
  const currentPage     = useRef<number>(0)
  const { isLoading, isError, data, fetchNextPage } =
    useInfiniteQuery('pokemonIndex', fetchPokemonIndex, {
      onSuccess: () => currentPage.current += 1,
      getNextPageParam: (lastPage, _allPages) => {
        if (!lastPage.data.next) return undefined

        return paginationLimit * currentPage.current
      }
    })

  function buildPokemonData(): Array<Pokemon> {
    if (!data?.pages.length) return []

    const results = data.pages.map((page) => page.data.results).flat()

    return results.map((serverPokemon: IPokemon) => new Pokemon(serverPokemon))
  }

  function fetchPokemonIndex({ pageParam = 0 }) {
    const params = { limit: paginationLimit, offset: pageParam }

    return axios.get('https://pokeapi.co/api/v2/pokemon', { params })
  }

  function pokemonRenderItem({ item }: { item: Pokemon }){
    return <MemoizedPokemonListItem card={new PokemonCard(item)} />
  }

  if (isLoading) return <Spinner />
  if (isError) return <ServerCommunicationError />

  return (
    <View>
      <FlatList data={buildPokemonData()}
                renderItem={pokemonRenderItem}
                keyExtractor={item => item.id}
                onEndReached={getMorePokemon}
                ListHeaderComponent={
                  <Text style={styles.heading}>
                    Select a Pokémon to see it up close
                  </Text>
                } />
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
