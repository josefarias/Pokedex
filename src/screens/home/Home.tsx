import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { HomeMenuOptions } from '@components/home/homeMenuOptions/HomeOptions'
import { Colors } from 'utils/Colors'

export const Home: React.FC = () => {
  return(
    <SafeAreaView>
      <Text style={styles.heading}>What would you like to see?</Text>
      <HomeMenuOptions />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  heading: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 40,
    padding: 24,
    marginBottom: 24
  }
})
