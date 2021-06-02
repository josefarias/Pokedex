import { PokemonCard } from 'facades/PokemonCard.facade'
import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { Colors } from 'utils/Colors'

interface IToggleTeamMembershipButton {
  pokemonCard: PokemonCard
}

export const ToggleTeamMembershipButton: React.FC<IToggleTeamMembershipButton> = ({pokemonCard}) => {
  const [isInTeam, setIsInTeam] = useState<boolean>(false)

  useEffect(() => {
    pokemonCard.isInTeam(setIsInTeam)
  }, [pokemonCard])

  function buttonStyles(): Object {
    if (isInTeam) {
      return inTeamButtonStyles
    } else {
      return notInTeamButtonStyles
    }
  }

  function buttonTitle(): string {
    if (isInTeam) {
      return 'Remove'
    } else {
      return 'Add To Team'
    }
  }

  function toggleTeamPresence() {
    const actOnResult = (isInTeam: boolean) => {
      if (isInTeam) {
        pokemonCard.removeFromTeam().then(() => setIsInTeam(false))
      } else {
        pokemonCard.addToTeam().then(() => setIsInTeam(true))
      }
    }

    pokemonCard.isInTeam(actOnResult)
  }

  return (
    <Pressable style={{...styles.container, ...buttonStyles()}} onPress={toggleTeamPresence}>
      <Text style={styles.title}>{buttonTitle()}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    borderRadius: 10,
    padding: 8
  },
  title: {
    fontSize: 16,
    color: Colors.white
  }
})

const inTeamButtonStyles = {
  backgroundColor: Colors.success
}

const notInTeamButtonStyles = {
  borderColor: Colors.white,
  borderStyle: 'solid',
  borderWidth: 1
}
