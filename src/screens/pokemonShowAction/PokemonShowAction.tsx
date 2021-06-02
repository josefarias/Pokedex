import { PokemonShow } from 'components/pokemonShowAction/pokemonShow/PokemonShow'
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

export const PokemonShowAction: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonShow />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
