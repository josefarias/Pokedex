import React from 'react'
import { MenuCard } from '@components/menuCard/MenuCard'
import { Colors } from 'utils/Colors'

export const HomeMenuOptions: React.FC = () => {
  const pokeballIcon = require('./assets/pokeball.png')
  const pokemonIcon = require('./assets/pokemon.png')

  return (
    <>
      <MenuCard title="All Pokémon"
                backgroundColor={ Colors.fire }
                icon={ pokemonIcon } />
      <MenuCard title="My Team"
                backgroundColor={ Colors.water }
                icon={ pokeballIcon } />
    </>
  )
}
