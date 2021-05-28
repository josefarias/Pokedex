import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { Colors } from 'utils/Colors'

export const Spinner: React.FC = () => {
  return <ActivityIndicator size="large"
                            color={Colors.white}
                            style={styles.activityIndicator} />
}

const styles = StyleSheet.create({
  activityIndicator: {
    marginTop: 56
  }
})
