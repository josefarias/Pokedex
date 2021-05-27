import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HomeMenuOptions } from 'components/homeMenuOptions/HomeOptions'

export const Home: React.FC = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.heading}>What would you like to see?</Text>
      <HomeMenuOptions />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    padding: 20,
    marginBottom: 20
  }
})
