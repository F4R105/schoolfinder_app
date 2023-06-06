import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'

import { Foundation } from '@expo/vector-icons';
import ThemeContext from '../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';

const Empty = () => {
    const {APP_COLORS} = useContext(ThemeContext)
    const navigation = useNavigation()

  return (
    <View style={styles.empty}>
      <Foundation name="alert" size={50} color={APP_COLORS.themeOppositeColor} />
      <Text style={{color: APP_COLORS.themeOppositeColor}}>No school was found</Text>
      <View style={styles.shortcuts}>
        <TouchableOpacity style={[styles.button, {borderColor: APP_COLORS.themeOppositeColor}]} onPress={() => navigation.goBack()}><Text style={{color: APP_COLORS.themeOppositeColor, textAlign: "center"}}>Go back</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Empty

const styles = StyleSheet.create({
    empty: {flex: 1, justifyContent: "center", alignItems: "center"},
    shortcuts: { flexDirection: "row", gap: 20},
    button: {borderWidth: 1, borderRadius: 100, padding: 5, minWidth: 100, marginTop: 50}
})