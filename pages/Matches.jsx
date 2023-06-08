import { Text, View, ScrollView, TextInput, FlatList, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'

import GlobalStyles from '../styles/global'
import MatchesStyles from '../styles/matches'
import ThemeContext from '../contexts/ThemeContext'

import FaIcon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Loader from '../components/Loader'
import Empty from '../components/Empty'
import Error from '../components/Error'

const School = ({school}) => {
  const {APP_COLORS} = useContext(ThemeContext)
  const navigation = useNavigation()

  return (
    <TouchableOpacity 
      style={[MatchesStyles.school, {backgroundColor: APP_COLORS.cardsColor}]}
      onPress={()=>navigation.navigate('School', {school})}
    >
      <View style={[MatchesStyles.schoolImage, {backgroundColor: APP_COLORS.brandOrange}]}>
        <FontAwesome5 name="school" size={15} color="white" />
      </View>
      <View style={MatchesStyles.schoolInfoContainer}>
        <View>
          <Text style={[MatchesStyles.schoolName, {color: APP_COLORS.themeOppositeColor}]}>{school.name}</Text>
          <Text style={[MatchesStyles.schoolLevel, {backgroundColor: APP_COLORS.brandBlue}]}>{school.category.level}</Text>
        </View>
        <FaIcon name="caret-right" size={20} color={APP_COLORS.themeOppositeColor} />
      </View>
    </TouchableOpacity>
  )
}


const Matches = ({route}) => {
  const {APP_COLORS} = useContext(ThemeContext)
  const navigation = useNavigation()

  const {state} = route.params
  console.log(state.query)

  const [schools, setSchools] = useState([])
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(true)

  const searchForSchools = async (query) => {
    const endpoint = state.trigger === "search" ? "search" : "filter"
    try{
      const res = await fetch(`https://038d-197-250-51-163.ngrok-free.app/${endpoint}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({query})
      })

      const matches = await res.json()
      return {status: "success", data: matches}
    }catch(error){
      return {status: "error", message: error.message}
    }
  }

  useEffect(()=>{
    searchForSchools(state.query)
    .then(res => {
      if(res.status === "error"){
        setError(true)
        setErrorMessage(res.message)
        setLoading(false)
      }else{
        setSchools(res.data)
        setLoading(false)
      }
    })
  },[])

  return (
    <View style={[GlobalStyles.container, {backgroundColor: APP_COLORS.backgroundColor}]}>
      <Text style={[GlobalStyles.pageTitle, {color: APP_COLORS.themeOppositeColor}]}>Matches</Text>
      <View style={GlobalStyles.logo}>
        <Text style={[GlobalStyles.logoText, {color: APP_COLORS.themeOppositeColor}]}>school</Text>
        <Text style={[GlobalStyles.logoText, {color: APP_COLORS.brandOrange}]}>Finder</Text>
      </View>
      {(state.trigger === "search") && <Pressable onPress={() => navigation.goBack()} style={[MatchesStyles.searchQuery]}>
        <FontAwesome name="search" size={20} color={APP_COLORS.themeOppositeColor} />
        <Text style={[{fontWeight: "bold"}, {color: APP_COLORS.themeOppositeColor}]}>{!loading && schools.length}</Text>
        <Text style={[{fontWeight: "bold"}, {color: APP_COLORS.themeOppositeColor}]}>Matching:</Text>
        <Text style={[{fontWeight: "normal", textAlign: "right"}, {color: APP_COLORS.themeOppositeColor}]}>"{state.query}"</Text>
      </Pressable>}
      <View style={GlobalStyles.pageContents}>
        {loading ? <Loader /> : 
          <>
            {error ? <Error message={errorMessage}/> :
              <>
                {schools.length === 0 ? <Empty /> :
                  <FlatList 
                    data={schools}
                    renderItem={({item})=>(<School school={item} />)}
                    keyExtractor={item=>item._id}
                  />
                }
              </>
            }
          </>
        }
      </View>
    </View>
  )
}

export default Matches