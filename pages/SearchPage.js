import React, {useEffect,useState} from 'react'
import {PulseIndicator} from 'react-native-indicators'
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  SafeAreaView, 
  FlatList, 
  TouchableOpacity,
  ActivityIndicator  } from 'react-native'

// ICONS
import FaIcon from 'react-native-vector-icons/FontAwesome';

const fetchSchools = async () => {
  const data = await fetch('https://school-finder.onrender.com/schools')
  const schools = await data.json()
  return schools
}

const SearchScreen = ({navigation}) => {

  const [schools, setSchools] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(()=>{
    fetchSchools()
    .then(schools=>{
      setSchools(schools)
      setLoading(false)
    })
    .catch(error=>console.log(error))
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Explore</Text>
      </View>

      {loading ? 
        <Loader />
        : 
        <Schools schools={schools} search={search} navigation={navigation} />
      }
      
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.input} 
          value={search} 
          onChangeText={(value=>setSearch(value))} 
          placeholder="Search school"
        />
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

const Schools = ({schools, search, navigation}) => {
  const filteredSchools = schools.filter(school=>school.name.toLowerCase().includes(search.toLowerCase()))

  if(filteredSchools.length !== 0) {
    return (
      <FlatList 
        style={{flex: 1, paddingVertical: 10}}
        data={schools.filter(school=>school.name.toLowerCase().includes(search.toLowerCase()))}
        renderItem={({item})=>(<School schoolName={item.name} navigation={navigation}/>)}
        keyExtractor={item=>item.id}
      />
    )
  }else{
    return (
      <View style={styles.notFound}>
        <Text style={styles.text}>School Not Found</Text>
      </View>
    )
  }
}

const Loader = () => (
  <View style={styles.loader}>
    <PulseIndicator color='#ff7f2aff' size={70}/>
  </View>
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
    text: {
      color: "white"
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
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    notFound: {
      backgroundColor: "gray",
      borderRadius: 10,
      height: "50%",
      justifyContent: "center",
      alignItems: "center"
    }
})