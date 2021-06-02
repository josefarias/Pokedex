import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'utils/Colors'

interface IBlankSlate {
  title: string
  description: string
  icon: ImageSourcePropType
  style?: Object
}

export const BlankSlate: React.FC<IBlankSlate> = (props) => {
  const { icon, title, description, style } = props

  return (
    <View style={{...styles.container, ...style}}>
      <Image source={icon} style={styles.icon}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 24
  },
  description: {
    color: Colors.gray,
    textAlign: 'center',
    fontSize: 24
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 24
  }
})
