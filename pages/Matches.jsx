import { Text, View, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'

import GlobalStyles from '../styles/global'
import MatchesStyles from '../styles/matches'
import ThemeContext from '../contexts/ThemeContext'

import FaIcon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const School = () => {
  const {APP_COLORS} = useContext(ThemeContext)
  const navigation = useNavigation()

  return (
    <TouchableOpacity 
      style={[MatchesStyles.school, {backgroundColor: APP_COLORS.cardsColor}]}
      onPress={()=>navigation.navigate('School')}
    >
      <View style={[MatchesStyles.schoolImage, {backgroundColor: APP_COLORS.brandOrange}]}>
        <FontAwesome5 name="school" size={15} color="white" />
      </View>
      <View style={MatchesStyles.schoolInfoContainer}>
        <View>
          <Text style={[MatchesStyles.schoolName, {color: APP_COLORS.themeOppositeColor}]}>Arusha tech</Text>
          <Text style={[MatchesStyles.schoolLevel, {backgroundColor: APP_COLORS.brandBlue}]}>Primary</Text>
        </View>
        <FaIcon name="caret-right" size={20} color={APP_COLORS.themeOppositeColor} />
      </View>
    </TouchableOpacity>
  )
}


const Matches = () => {
  const {APP_COLORS} = useContext(ThemeContext)
  const navigation = useNavigation()

  return (
    <View style={[GlobalStyles.container, {backgroundColor: APP_COLORS.backgroundColor}]}>
      <Text style={[GlobalStyles.pageTitle, {color: APP_COLORS.themeOppositeColor}]}>Matches</Text>
      <View style={GlobalStyles.logo}>
        <Text style={[GlobalStyles.logoText, {color: APP_COLORS.themeOppositeColor}]}>school</Text>
        <Text style={[GlobalStyles.logoText, {color: APP_COLORS.brandOrange}]}>Finder</Text>
      </View>
      <View style={[MatchesStyles.searchQuery]}>
        <FontAwesome name="search" size={20} color={APP_COLORS.themeOppositeColor} />
        <Text style={[{fontWeight: "bold"}, {color: APP_COLORS.themeOppositeColor}]}>Matching:</Text>
        <Text style={[{fontWeight: "normal", textAlign: "right"}, {color: APP_COLORS.themeOppositeColor}]}>"Arusha"</Text>
      </View>
      <ScrollView style={GlobalStyles.pageContents}>
        {/* <FlatList 
          data={}
          renderItem={({item})=>(<School school={item} navigation={navigation}/>)}
          keyExtractor={item=>item._id}
        /> */}
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
      </ScrollView>
    </View>
  )
}

export default Matches