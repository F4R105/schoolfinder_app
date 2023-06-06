import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import {PulseIndicator} from 'react-native-indicators'

import ThemeContext from '../contexts/ThemeContext'

const Loader = () => {
    const {APP_COLORS} = useContext(ThemeContext)

  return (
    <View style={styles.loader}>
        <PulseIndicator color={APP_COLORS.brandOrange} size={50}/>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    loader: {flex: 1, justifyContent: "center", alignItems: "center"}
})