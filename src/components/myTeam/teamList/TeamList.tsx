import { useNavigation } from '@react-navigation/core'
import { MemoizedPokemonListItem } from 'components/pokemonIndexAction/pokemonListItem/PokemonListItem'
import { BlankSlate } from 'components/shared/blankSlate/BlankSlate'
import { PokemonCard } from 'facades/PokemonCard.facade'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { Colors } from 'utils/Colors'
import { getTeam } from 'utils/TeamHelpers'

export const TeamList: React.FC = () => {
  const [team, setTeam] = useState<Array<PokemonCard>>([])
  const pokeballIcon    = require('./assets/pokeball.png')
  const navigation      = useNavigation()

  useEffect(() => {
    let subscribed = true
    const unsubscribe = navigation.addListener('focus', () => {
      async function fetchTeam() {
        const fetchedTeam = await getTeam()
        if (subscribed) setTeam(fetchedTeam)
      }

      fetchTeam()
    })

    return () => {
      subscribed = false
      unsubscribe()
    }
  }, [navigation])

  function pokemonRenderItem({ item }: { item: PokemonCard }) {
    return <MemoizedPokemonListItem card={item} />
  }

  if (team.length < 1) {
    return (
      <BlankSlate title="There are no Pokémon on your team"
                  description="Add team members by visiting the Pokémon List section"
                  icon={pokeballIcon}
                  style={styles.blankSlate} />
    )
  }

  return (
    <FlatList data={team}
              renderItem={pokemonRenderItem}
              keyExtractor={item => item.id.toString()}
              ListHeaderComponent={
                <Text style={styles.heading}>
                  This is your team
                </Text>
              } />
  )
}

const styles = StyleSheet.create({
  blankSlate: {
    marginTop: 96
  },
  heading: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 32,
    padding: 24,
    marginBottom: 8
  }
})
