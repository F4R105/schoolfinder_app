import { Text, View, ScrollView } from 'react-native'
import React, { useContext } from 'react'

import GlobalStyles from '../styles/global'
import ThemeContext from '../contexts/ThemeContext'

const Home = () => {
  const {APP_COLORS} = useContext(ThemeContext)

  return (
    <View style={[GlobalStyles.container, {backgroundColor: APP_COLORS.backgroundColor}]}>
      <Text style={[GlobalStyles.pageTitle, {color: APP_COLORS.themeOppositeColor}]}>Home</Text>
      <View style={GlobalStyles.logo}>
        <Text style={[GlobalStyles.logoText, {color: APP_COLORS.themeOppositeColor}]}>school</Text>
        <Text style={[GlobalStyles.logoText, {color: APP_COLORS.brandOrange}]}>Finder</Text>
      </View>
      <ScrollView style={GlobalStyles.pageContents}>
        
      </ScrollView>
    </View>
  )
}

export default Home