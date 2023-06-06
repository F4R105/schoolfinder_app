import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'

import { Foundation } from '@expo/vector-icons';
import ThemeContext from '../contexts/ThemeContext'
import { useNavigation } from '@react-navigation/native';

const Error = ({message}) => {
    const {APP_COLORS} = useContext(ThemeContext)
    const navigation = useNavigation()

  return (
    <View style={styles.error}>
      <Foundation name="alert" size={50} color="#e02d2d" />
      <Text style={{color: APP_COLORS.themeOppositeColor}}>Network Error</Text>
      <View style={styles.shortcuts}>
        <TouchableOpacity style={[styles.button, {borderColor: APP_COLORS.themeOppositeColor}]} onPress={() => navigation.goBack()}><Text style={{color: APP_COLORS.themeOppositeColor, textAlign: "center"}}>Go back</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Error

const styles = StyleSheet.create({
    error: {flex: 1, justifyContent: "center", alignItems: "center", gap: 10},
    shortcuts: { flexDirection: "row", gap: 20},
    button: {borderWidth: 1, borderRadius: 100, padding: 5, minWidth: 100, marginTop: 50}
})