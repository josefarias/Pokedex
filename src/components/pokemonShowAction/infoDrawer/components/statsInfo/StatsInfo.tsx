import { Stat } from 'facades/Stat.facade'
import { PokemonStat } from 'models/PokemonStat.model'
import React from 'react'
import { FlatList } from 'react-native'
import { MemoizedStatGauge } from './StatGauge'

interface IStatsInfo {
  stats: Array<PokemonStat>
  color: string
}

export const StatsInfo: React.FC<IStatsInfo> = ({stats, color}) => {
  function statRenderItem({ item }: { item: PokemonStat }) {
    return <MemoizedStatGauge key={item.id}
                              stat={new Stat(item)}
                              color={color} />
  }

  return (
    <FlatList data={stats} renderItem={statRenderItem} />
  )
}
