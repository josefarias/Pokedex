import React from 'react'
import { MenuCard } from '@components/home/menuCard/MenuCard'
import { Colors } from 'utils/Colors'

export const HomeMenuOptions: React.FC = () => {
  const pokeballIcon = require('./assets/pokeball.png')
  const pokemonIcon  = require('./assets/pokemon.png')

  return (
    <>
      <MenuCard title="All Pokémon"
                backgroundColor={ Colors.fire }
                icon={ pokemonIcon }
                destination="Pokemon List" />
      <MenuCard title="My Team"
                backgroundColor={ Colors.water }
                icon={ pokeballIcon }
                destination="My Team" />
    </>
  )
}
