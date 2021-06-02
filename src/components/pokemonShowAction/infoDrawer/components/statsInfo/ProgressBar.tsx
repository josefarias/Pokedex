import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from 'utils/Colors'

interface IProgressBar {
  progress: number
  color: string
}

export const ProgressBar: React.FC<IProgressBar> = ({progress, color}) => {
  return (
    <View>
      <View style={styles.bar} />
      <View style={{...styles.progress, width: `${progress}%`, backgroundColor: color}} />
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: Colors.darkGray,
    height: 8,
    borderRadius: 80
  },
  progress: {
    height: 8,
    position: 'absolute',
    borderRadius: 80
  }
})
