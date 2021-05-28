import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { BlankSlate } from '@components/blankSlate/BlankSlate'

export const MyTeam: React.FC = () => {
  const pokeballIcon = require('./assets/pokeball.png')

  return (
    <SafeAreaView style={styles.container}>
      <BlankSlate title="There are no Pokémon on your team"
                  description="Add team members by visiting the Pokémon List section"
                  icon={pokeballIcon} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 96
  }
})
