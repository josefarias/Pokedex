import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'utils/Colors'

interface IBlankSlate {
  title: string
  description: string
  icon: ImageSourcePropType
}

export const BlankSlate: React.FC<IBlankSlate> = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.icon} style={styles.icon}/>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
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
