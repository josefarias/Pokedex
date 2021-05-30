import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from 'utils/Colors'

export const InfoDrawer: React.FC = () => {
  return (
    <View style={styles.container}>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charcoal,
    borderTopLeftRadius: 48,
    borderTopEndRadius: 48
  }
})
