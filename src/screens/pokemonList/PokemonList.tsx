import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { Colors } from 'utils/Colors'

export const PokemonList: React.FC = () => {
  return (
    <ActivityIndicator size="large" color={Colors.white} style={styles.activityIndicator} />
  )
}

const styles = StyleSheet.create({
  activityIndicator: {
    marginTop: 56
  }
})
