import React, { useState } from 'react'
import SegmentedControl from 'rn-segmented-control'
import { StyleSheet, View } from 'react-native'
import { Colors } from 'utils/Colors'
import { PokemonInfoDrawer } from 'facades/PokemonInfoDrawer.facade'
import { StatsInfo } from './components/statsInfo/StatsInfo'

interface IInfoDrawer {
  drawer: PokemonInfoDrawer
}

export const InfoDrawer: React.FC<IInfoDrawer> = ({drawer}) => {
  const tabTitles               = ['Stats', 'Types', 'Moves']
  const [tabIndex, setTabIndex] = useState(0)

  function componentFor(tabTitle: string) {
    switch(tabTitle) {
      case 'Stats':
        return <StatsInfo stats={drawer.stats} color={drawer.color} />
      case 'Types':
      case 'Moves':
      default:
        return <StatsInfo stats={drawer.stats} color={drawer.color} />
    }
  }

  return (
    <View style={styles.container}>
      <SegmentedControl tabs={tabTitles}
                        onChange={(index) => setTabIndex(index)}
                        currentIndex={tabIndex}
                        theme='DARK'
                        activeSegmentBackgroundColor={drawer.activeSegmentBackgroundColor}
                        segmentedControlBackgroundColor={Colors.charcoal}
                        tileStyle={styles.segmentedControlTile}
                        containerStyle={styles.segmentedControlContainer} />

      <View style={styles.contentWrapper}>
        {componentFor(tabTitles[tabIndex])}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charcoal,
    borderTopLeftRadius: 48,
    borderTopEndRadius: 48,
    paddingTop: 40
  },
  segmentedControlTile: {
    borderRadius: 80,
  },
  segmentedControlContainer: {
    alignSelf: 'center'
  },
  contentWrapper: {
    paddingHorizontal: 32,
    paddingVertical: 24
  }
})
