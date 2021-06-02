import React from 'react'
import { PokemonIndex } from 'components/pokemonIndexAction/pokemonIndex/PokemonIndex'
import { SafeAreaView } from 'react-native'

export const PokemonIndexAction: React.FC = () => {
  return (
    <SafeAreaView>
      <PokemonIndex />
    </SafeAreaView>
  )
}
