import { PokemonType } from 'models/PokemonType.model';
import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface IDamageRelationList {
  relationName: string
  pokemonTypes: Array<PokemonType>
}

function DamageRelationList(props: IDamageRelationList) {
  const { relationName, pokemonTypes } = props

  function typeItems(): string {
    return pokemonTypes.map(type => type.name).join(', ')
  }

  if (!pokemonTypes.length) return null

  return (
    <>
      <Text style={styles.title}>{relationName}</Text>
      <Text style={styles.subtitle}>{typeItems()}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    marginTop: 16,
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
    color: Colors.white
  }
})

export const MemoizedDamageRelationList = memo(DamageRelationList)
