import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface IPokemonHeader {
  style: object
  name: string
  formattedNumber: string
}

export const PokemonHeader: React.FC<IPokemonHeader> = (props) => {
  const { style, name, formattedNumber } = props

  return (
    <View style={{...styles.container, ...style}}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.number}>{formattedNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between'
  },
  name: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: 'bold'
  },
  number: {
    color: Colors.white,
    fontSize: 24
  }
})
