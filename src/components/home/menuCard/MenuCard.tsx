import React from 'react'
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text } from 'react-native'
import { Colors } from 'utils/Colors'
import { useNavigation } from '@react-navigation/core'

interface IMenuCard {
  backgroundColor: string
  destination: string
  icon: ImageSourcePropType
  title: string
}

export const MenuCard: React.FC<IMenuCard> = (props) => {
  const { backgroundColor, destination, title, icon } = props

  const navigation = useNavigation()

  function navigate(): void {
    navigation.navigate(destination)
  }

  return (
    <Pressable style={{ ...styles.card, backgroundColor: backgroundColor }}
               onPress={navigate}>
        <Text style={styles.title}>{title}</Text>
        <Image source={icon} style={styles.icon} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    paddingBottom: 16,
    paddingLeft: 16,
    borderRadius: 8,
    marginHorizontal: 24,
    marginBottom: 32,
    overflow: 'hidden'
  },
  icon: {
    position: 'absolute',
    right: -16,
    bottom: -16,
    transform: [{ rotate: '30deg' }]
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.white,
    marginTop: 80
  }
})
