import React from 'react'
import { Image, Pressable, StyleSheet, Text } from 'react-native'
import { Colors, randomInterfaceColor } from 'utils/Colors'
import { PokemonCard } from 'facades/PokemonCard.facade'

interface IPokemonListItem {
  card: PokemonCard
}

export const PokemonListItem: React.FC<IPokemonListItem> = (props) => {
  const icon      = require('./assets/pokeball.png')
  const cardStyle = {...styles.card, backgroundColor: randomInterfaceColor()}

  const card = () => props.card

  return (
    <Pressable style={cardStyle}>
      <Text style={styles.number}>{card().formattedNumber}</Text>
      <Text style={styles.name}>{card().pokemonName}</Text>
      <Image source={icon} style={styles.icon} />
      <Image source={{uri: card().imageUrl}}
             style={styles.pokemon} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    paddingBottom: 16,
    paddingLeft: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 32,
    overflow: 'hidden'
  },
  name: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 80
  },
  number: {
    color: Colors.white,
    fontSize: 56,
    fontWeight: 'bold',
    position: 'absolute',
    top: 4,
    left: 8,
    opacity: 0.5
  },
  icon: {
    position: 'absolute',
    right: -16,
    bottom: -16,
    transform: [{ rotate: '30deg' }]
  },
  pokemon: {
    width: 112,
    height: 112,
    position: 'absolute',
    right: 16,
    bottom: 8
  }
})
