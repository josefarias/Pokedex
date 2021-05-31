import { PokemonType } from 'models/PokemonType.model'
import React from 'react'
import { FlatList } from 'react-native'
import { MemoizedTypeCard } from './TypeCard'

interface ITypesInfo {
  types: Array<PokemonType>
}

export const TypesInfo: React.FC<ITypesInfo> = ({types}) => {
  function typeRenderItem({ item }: { item: PokemonType }) {
    return <MemoizedTypeCard key={item.id} pokemonTypeId={item.id} />
  }

  return <FlatList data={types} renderItem={typeRenderItem} />
}
