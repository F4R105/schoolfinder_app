import { Text, View, ScrollView, Switch } from 'react-native'
import React, {useContext, useState} from 'react'

import GlobalStyles from '../styles/global'
import SettingsStyles from '../styles/settings'
import ThemeContext from '../contexts/ThemeContext'

const Settings = () => {
  const {APP_COLORS, theme, updateUserThemeSetting} = useContext(ThemeContext)

    // SETTINGS
    const [darkModeEnabled, setDarkModeEnabled] = useState(theme === "dark" ? true : false)

  return (
    <View style={[GlobalStyles.container, {backgroundColor: APP_COLORS.backgroundColor}]}>
      <Text style={[GlobalStyles.pageTitle, {color: APP_COLORS.themeOppositeColor}]}>Settings</Text>
      <View style={GlobalStyles.logo}>
        <Text style={[GlobalStyles.logoText, {color: APP_COLORS.themeOppositeColor}]}>school</Text>
        <Text style={[GlobalStyles.logoText, {color: APP_COLORS.brandOrange}]}>Finder</Text>
      </View>
      <ScrollView style={GlobalStyles.pageContents}>
        <View style={[SettingsStyles.setting, {backgroundColor:  APP_COLORS.cardsColor, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}]}>
            <View>
              <Text style={[SettingsStyles.settingText, {color: APP_COLORS.themeOppositeColor}]}>Enable Dark Mode</Text>
              <Text noOfLines={1} style={SettingsStyles.settingDescription}>Switching on means dark mode enabled</Text>
            </View>
            <Switch
              trackColor={{false: '#767577', true: APP_COLORS.brandOrange}}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={()=>{
                setDarkModeEnabled(!darkModeEnabled)
                darkModeEnabled ? updateUserThemeSetting('light') : updateUserThemeSetting('dark')
              }}
              value={darkModeEnabled}
            />
        </View>
        <View style={[SettingsStyles.setting, {backgroundColor:  APP_COLORS.cardsColor}]}>
          <Text style={[SettingsStyles.settingText, {color: APP_COLORS.themeOppositeColor}]}>About</Text>
          <Text style={SettingsStyles.settingDescription}>
            School finder mobile application is part of school finder system consisting of mobile app, webapp for users, webapp for system admin and school finder API which provides school's information.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Settings