import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

const SchoolInfo = ({route, navigation}) => {

  const isFocused = useIsFocused()
  if(!isFocused) navigation.replace('explore')

  const {schoolName} = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{schoolName}</Text>
    </View>
  )
}

export default SchoolInfo

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#050811ff',
  },
  text: {
      color: "white",
      fontSize: 30,
  }
})