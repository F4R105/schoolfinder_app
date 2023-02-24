import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image  } from 'react-native'

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Home</Text>
      </View>
      <View style={styles.hero}>
        <Text style={[styles.text, styles.heroTitle]}>Welcome to school finder</Text>
        <Text style={[styles.text, styles.heroPara]}>Search and Filter Tanzanian schools based on your requirement</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('filter_stack')} style={styles.button}><Text style={styles.text}>Filter</Text></TouchableOpacity>
      </View>
      <View>
        <Text style={[styles.text, styles.newsTitle]}>Shule bora 2023</Text>
      </View>
      <ScrollView>
        <View style={styles.school}>
          <Image style={styles.schoolImage}></Image>
          <View style={{borderColor: 'green',borderWidth: 1}}>
            <Text style={[styles.text,styles.schoolName]}>Arusha Technical College</Text>
            <Text style={[styles.text,styles.schoolDescr]}>Arusha close to Triple A night club, We offer IT course, Engineering and Electrical courses</Text>
          </View>
        </View>
        <View style={styles.school}>
          <Image style={styles.schoolImage}></Image>
          <View>
            <Text style={[styles.text,styles.schoolName]}>Arusha Technical College</Text>
            <Text style={[styles.text,styles.schoolDescr]}>Arusha close to Triple A night club, We offer IT course, Engineering and Electrical courses</Text>
          </View>
        </View>
        <View style={styles.school}>
          <Image style={styles.schoolImage}></Image>
          <View>
            <Text style={[styles.text,styles.schoolName]}>Arusha Technical College</Text>
            <Text style={[styles.text,styles.schoolDescr]}>Arusha close to Triple A night club, We offer IT course, Engineering and Electrical courses</Text>
          </View>
        </View>
        <View style={styles.school}>
          <Image style={styles.schoolImage}></Image>
          <View>
            <Text style={[styles.text,styles.schoolName]}>Arusha Technical College</Text>
            <Text style={[styles.text,styles.schoolDescr]}>Arusha close to Triple A night club, We offer IT course, Engineering and Electrical courses</Text>
          </View>
        </View>
        <View style={styles.school}>
          <Image style={styles.schoolImage}></Image>
          <View>
            <Text style={[styles.text,styles.schoolName]}>Arusha Technical College</Text>
            <Text style={[styles.text,styles.schoolDescr]}>Arusha close to Triple A night club, We offer IT course, Engineering and Electrical courses</Text>
          </View>
        </View>
        <View style={styles.school}>
          <Image style={styles.schoolImage}></Image>
          <View>
            <Text style={[styles.text,styles.schoolName]}>Arusha Technical College</Text>
            <Text style={[styles.text,styles.schoolDescr]}>Arusha close to Triple A night club, We offer IT course, Engineering and Electrical courses</Text>
          </View>
        </View>
        <View style={styles.school}>
          <Image style={styles.schoolImage}></Image>
          <View>
            <Text style={[styles.text,styles.schoolName]}>Arusha Technical College</Text>
            <Text style={[styles.text,styles.schoolDescr]}>Arusha close to Triple A night club, We offer IT course, Engineering and Electrical courses</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#050811ff'
    },
    text: {
      color: 'white'
    },
    headerContainer: {
      paddingTop: 40,
      paddingBottom: 20,
    },
    header: {
      fontSize: 25,
      color: "white"
    },
    hero: {
      backgroundColor: '#543badff',
      padding: 10,
      borderRadius: 15,
    },
    heroTitle: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    heroPara: {
      fontSize: 15,
    },
    button: {
      backgroundColor: '#ff7f2aff',
      width: 100,
      padding: 10,
      marginTop: 30,
      borderRadius: 3,
      alignItems: 'center'
    },
    newsTitle: {
      paddingVertical: 20,
      fontSize: 20
    },
    school: {
      padding: 8,
      flexDirection: 'row',
      borderRadius: 10,
      marginBottom: 10,
      backgroundColor: '#543bad37',
    },
    schoolImage: {
      width: 100,
      height:100,
      marginRight: 10,
      borderRadius:5,
      backgroundColor: '#ff7f2aff'
    },
    schoolName: {
      fontWeight: 'bold',
      fontSize: 15
    },
    schoolDescr: {
      flexWrap: 'wrap'
    }
})