import React from 'react'
import { Home } from '@screens/Home'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Colors } from 'utils/Colors'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charcoal
  }
})

export default App
