import { PokemonMove } from 'models/PokemonMove.model'
import React from 'react'
import { FlatList } from 'react-native'
import { MemoizedMoveCard } from './MoveCard'

interface IMovesInfo {
  moves: Array<PokemonMove>
}

export const MovesInfo: React.FC<IMovesInfo> = ({moves}) => {
  function moveRenderItem({ item }: { item: PokemonMove }) {
    return <MemoizedMoveCard pokemonMoveId={item.id} />
  }

  return <FlatList data={moves}
                   keyExtractor={item => item.id.toString()}
                   renderItem={moveRenderItem} />
}
