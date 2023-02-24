import React, {useEffect,useState} from 'react'
import { StyleSheet, Text, View, TextInput, SafeAreaView, FlatList, TouchableOpacity  } from 'react-native'

// ICONS
import FaIcon from 'react-native-vector-icons/FontAwesome';

const fetchSchools = async () => {
  const data = await fetch('https://fari-api.onrender.com/api')
  const schools = await data.json()
  return schools
}

const SearchScreen = ({navigation}) => {

  const [schools, setSchools] = useState([])

  useEffect(()=>{
    fetchSchools().then(schools=>setSchools(schools))
  },[])

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.text}>SearchPage</Text> */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Explore</Text>
      </View>
      <FlatList 
        style={{flex: 1, paddingVertical: 10}}
        data={schools}
        renderItem={({item})=>(<School schoolName={item.name} navigation={navigation}/>)}
        keyExtractor={item=>item.id}
      />
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder="Search school"/>
      </View>
    </SafeAreaView>
  )
}

const School = ({schoolName, navigation}) => (
    <TouchableOpacity onPress={()=>navigation.navigate('school_info', {schoolName})}>
        <View style={styles.schoolContainer}>
            <Text style={styles.schoolName}>{schoolName}</Text>
            <FaIcon name="caret-right" color="white" />
        </View>
    </TouchableOpacity>
)

export default SearchScreen

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
    schoolContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#da6e2b3b", 
        paddingVertical: 20,
        paddingHorizontal: 10, 
        borderRadius: 10, 
        marginBottom: 10,
    },
    schoolName: {
        color: "white", 
        fontSize: 15
    },
    header: {
        fontSize: 25,
        color: "white"
    },
    searchContainer: {
        position: "absolute",
        height: 100,
        backgroundColor: "#0e0f27ef",
        paddingHorizontal: 20,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        right: 0,
        left: 0,
    },
    input: {
        fontSize: 20,
        color: "#0b1226ff",
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 400,
        width: "100%"
    }
})