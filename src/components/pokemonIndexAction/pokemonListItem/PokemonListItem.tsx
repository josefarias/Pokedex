import React, { memo } from 'react'
import { Image, Pressable, StyleSheet, Text } from 'react-native'
import { Colors } from 'utils/Colors'
import { PokemonCard } from 'facades/PokemonCard.facade'
import { useNavigation } from '@react-navigation/core'

interface IPokemonListItem {
  card: PokemonCard
}

function PokemonListItem(props: IPokemonListItem) {
  const card       = () => props.card
  const navigation = useNavigation()
  const icon       = require('./assets/pokeball.png')
  const cardStyle  = { ...styles.card, backgroundColor: card().background }

  function navigate(): void {
    navigation.navigate('Pokemon', { id: card().id })
  }

  return (
    <Pressable style={cardStyle}
               onPress={navigate} >
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

export const MemoizedPokemonListItem = memo(PokemonListItem)
