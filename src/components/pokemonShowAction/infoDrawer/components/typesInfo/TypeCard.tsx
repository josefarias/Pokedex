import { API_ENDPOINTS } from 'api/endpoints'
import axios, { AxiosResponse } from 'axios'
import { ServerCommunicationError } from 'components/shared/serverCommunicationError/ServerCommunicationError'
import { Spinner } from 'components/shared/spinner/Spinner'
import { DAMAGE_RELATION_TITLE_MAPPINGS } from 'models/DamageRelations.model'
import { EMPTY_POKEMON_TYPE, PokemonType, IServerPokemonType } from 'models/PokemonType.model'
import React, { memo, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useQuery } from 'react-query'
import { Colors } from 'utils/Colors'
import { MemoizedDamageRelationList } from './DamageRelationList'

interface ITypeCard {
  pokemonTypeId: number
}

function TypeCard({pokemonTypeId}: ITypeCard) {
  const pokemonType     = () => pokemonTypeRef.current
  const damageRelations = () => pokemonType().damageRelations
  const pokemonTypeRef  = useRef<PokemonType>(EMPTY_POKEMON_TYPE)
  const { isLoading, isError } =
    useQuery(`pokemonTypeShow${pokemonTypeId}`, fetchPokemonType, {
      onSuccess: (data) => persistPokemonType(data)
    })

  function fetchPokemonType() {
    return axios.get(`${API_ENDPOINTS.contentApi}/type/${pokemonTypeId}`)
  }

  function persistPokemonType(data: AxiosResponse<IServerPokemonType>) {
    pokemonTypeRef.current = new PokemonType(data.data)
  }

  function relations(): Array<Element> {
    const mappings: { [name: string]: string } = DAMAGE_RELATION_TITLE_MAPPINGS

    return Object.keys(mappings).map((key: string, index: number) => {
      const rels = damageRelations() as unknown as { [name: string]: Array<PokemonType> }

      return <MemoizedDamageRelationList key={index.toString()}
                                         relationName={mappings[key]}
                                         pokemonTypes={rels[key]} />
    })
  }

  if (isLoading) return <Spinner />
  if (isError) return <ServerCommunicationError />

  return (
    <View style={{...styles.container, backgroundColor: pokemonType().color}}>
      <Text style={styles.title}>{pokemonType().name}</Text>
      {relations()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
  }
})

export const MemoizedTypeCard = memo(TypeCard)
