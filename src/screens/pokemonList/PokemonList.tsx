import React from 'react'
import { PokemonIndex } from '@components/pokemonList/pokemonIndex/PokemonIndex'
import { SafeAreaView } from 'react-native'

export const PokemonList: React.FC = () => {
  return (
    <SafeAreaView>
      <PokemonIndex />
    </SafeAreaView>
  )
}
