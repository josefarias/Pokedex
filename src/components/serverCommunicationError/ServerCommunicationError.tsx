import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from 'utils/Colors'

export const ServerCommunicationError: React.FC = () => {
  return <Text style={styles.heading}>Error: Communication with server failed</Text>
}

const styles = StyleSheet.create({
  heading: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 32,
    padding: 24,
    marginBottom: 8
  }
})
