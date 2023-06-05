import { Text, View, ScrollView, TextInput, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'

import GlobalStyles from '../styles/global'
import HomeStyles from '../styles/home'
import ThemeContext from '../contexts/ThemeContext'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = ({navigation}) => {
  const {APP_COLORS} = useContext(ThemeContext)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <View style={[GlobalStyles.container, {backgroundColor: APP_COLORS.backgroundColor}]}>
      <Text style={[GlobalStyles.pageTitle, {color: APP_COLORS.themeOppositeColor}]}>Home</Text>
      <View style={GlobalStyles.logo}>
        <Text style={[GlobalStyles.logoText, {color: APP_COLORS.themeOppositeColor}]}>school</Text>
        <Text style={[GlobalStyles.logoText, {color: APP_COLORS.brandOrange}]}>Finder</Text>
      </View>
      <ScrollView style={GlobalStyles.pageContents}>
        <View style={HomeStyles.searchContainer}>
          <TextInput
            onChangeText={text => setSearchQuery(text)}
            value={searchQuery}
            style={HomeStyles.searchInput}
          />
          <TouchableOpacity 
            style={[HomeStyles.searchBtn, {backgroundColor: APP_COLORS.brandBlue}]}
            onPress={()=>{
              if(searchQuery === "") return ToastAndroid.show('Search is empty', ToastAndroid.SHORT)
              navigation.navigate('Matches', {state: {trigger: "search", query: searchQuery}})
            }}
          >
            <Text style={HomeStyles.searchBtnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home