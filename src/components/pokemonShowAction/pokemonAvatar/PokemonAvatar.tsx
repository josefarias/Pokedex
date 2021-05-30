import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

interface IPokemonAvatar {
  style: Object
  imageUrl: string
}

export const PokemonAvatar: React.FC<IPokemonAvatar> = (props) => {
  const icon = require('./assets/pokeball.png')

  return (
    <View style={{...styles.container, ...props.style}}>
      <Image source={icon} />
      <Image source={{uri: props.imageUrl}}
             style={styles.pokemon} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3
  },
  pokemon: {
    width: 200,
    height: 200,
    position: 'absolute',
    bottom: -32
  }
})
