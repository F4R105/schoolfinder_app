import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity  } from 'react-native'

const FilterPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Filter</Text>
      </View>
      <ScrollView>

      </ScrollView>
    </SafeAreaView>
  )
}

export default FilterPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#050811ff'
  },
  headerContainer: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  header: {
    fontSize: 25,
    color: "white"
  },
})