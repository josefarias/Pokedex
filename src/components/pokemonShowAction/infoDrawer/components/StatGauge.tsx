import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Stat } from 'facades/Stat.facade'
import { Colors } from 'utils/Colors'
import { ProgressBar } from './ProgressBar'

interface IStatGauge {
  stat: Stat
  color: string
}

function StatGauge({stat, color}: IStatGauge) {
  return(
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.statName}>{stat.name}</Text>
        <Text style={styles.statValue}> ({stat.value} pts)</Text>
      </View>

      <ProgressBar progress={stat.percentage} color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  statName: {
    color: Colors.white,
    fontSize: 24,
  },
  statValue: {
    color: Colors.gray,
    fontSize: 16,
  },
  progressBarContainer: {
    width: 150,
    paddingVertical: 'auto'
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8
  }
})

export const MemoizedStatGauge = memo(StatGauge)
