import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

const SchoolInfo = ({route, navigation}) => {

  const isFocused = useIsFocused()
  if(!isFocused) navigation.replace('explore')

  const {schoolName} = route.params
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{schoolName}</Text> */}
      <View style={styles.imageContainer}>
        <Text style={{fontSize: 30, color: "white"}}>IMAGE</Text>
      </View>
      <View style={styles.informationContainer}>
        <View style={{position: "relative", flex: 1, padding: 20,}}>
          <Text style={styles.schoolName}>{schoolName}</Text>
          <Text style={styles.schoolDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi debitis dicta deleniti eum dolorem explicabo vitae quibusdam eaque, officia beatae saepe magnam obcaecati eveniet sapiente delectus a similique maiores facilis natus commodi in recusandae quos. Corrupti magni commodi repellendus.
          </Text>
          <View style={styles.callBtnContainer}>
            <TouchableOpacity style={styles.callButton}>
              <Text style={[styles.text,{textTransform: "uppercase"}]}>Call</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SchoolInfo

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#050811ff',
  },
  text: {
    color: "white"
  },
  schoolName: {
      color: "white",
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 10
  },
  schoolDescription: {
    color: "white"
  },
  imageContainer: {
    backgroundColor: "#ff7f2aff",
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  informationContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: "60%",
    overflow: "hidden",
    backgroundColor: "#050811ff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  callBtnContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#0e0f27ef",
    right: 0,
    left: 0,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  callButton: {
    width: "90%",
    height: "50%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#543badff"
  }
})