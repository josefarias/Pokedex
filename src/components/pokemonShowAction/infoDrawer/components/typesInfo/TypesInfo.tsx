import { PokemonType } from 'models/PokemonType.model'
import React from 'react'
import { FlatList } from 'react-native'
import { MemoizedTypeCard } from './TypeCard'

interface ITypesInfo {
  types: Array<PokemonType>
}

export const TypesInfo: React.FC<ITypesInfo> = ({types}) => {
  function typeRenderItem({ item }: { item: PokemonType }) {
    return <MemoizedTypeCard pokemonTypeId={item.id} />
  }

  return <FlatList data={types}
                   keyExtractor={item => item.id.toString()}
                   renderItem={typeRenderItem} />
}
