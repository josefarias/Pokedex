import React from 'react'
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text } from 'react-native'
import { Colors } from 'utils/Colors'

interface IMenuCard {
  backgroundColor: string
  icon: ImageSourcePropType
  title: string
}

export const MenuCard: React.FC<IMenuCard> = (props) => {
  return (
    <Pressable style={{...styles.card, backgroundColor: props.backgroundColor}}>
        <Text style={styles.title}>{props.title}</Text>
        <Image source={props.icon} style={styles.icon}/>
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
