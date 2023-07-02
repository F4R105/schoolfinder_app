import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';

import { StatusBar } from 'expo-status-bar';
import Navigation from './Navigation'

import { ThemeContextProvider } from './contexts/ThemeContext'
import { useEffect, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const OnBoardingImage = require('./assets/student.jpg')
import GlobalStyles from './styles/global'

const OnBoarding = ({setShowOnboardingScreen}) => {

  return (
    <ImageBackground source={OnBoardingImage} style={{position: 'relative', flex: 1}}>
      <LinearGradient
        // Background Linear Gradient
        colors={['white', 'transparent']}
        style={{position: 'absolute', width:'100%', height: '50%', top: 0, alignItems: "center", justifyContent: "center"}}
      >
        <Text
          style={{fontSize: 20, fontWeight: "bold", color: "#6b57b6ff"}}
        >Welcome</Text>
        <View style={GlobalStyles.logo}>
          <Text style={[GlobalStyles.logoText, {color: "#161333ff"}]}>school</Text>
          <Text style={[GlobalStyles.logoText, {color: "#ff944cff"}]}>Finder</Text>
        </View>
      </LinearGradient>
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', 'white']}
        style={{position: 'absolute', width:'100%', height: '50%', bottom: 0, alignItems: "center", justifyContent: "flex-end"}}
      >
        <TouchableOpacity 
          style={{backgroundColor: "#6b57b6ff", width: "80%", margin: 40, borderRadius: 5, paddingVertical: 10}}
          onPress={()=>{
            setShowOnboardingScreen(false)
            SecureStore.setItemAsync('school-finder', 'not guest');
          }}
        >
          <Text style={{textAlign: "center", fontSize: 25, textTransform: "uppercase", color: "white"}}>Start</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  )
}

export default function App() {
  const [showOnboardingScreen, setShowOnboardingScreen] = useState(false)

  
  async function checkGuest(key) {
    try{
      let result = await SecureStore.getItemAsync(key);
      console.log(result)
      if(result !== 'not guest') return setShowOnboardingScreen(true)
    }catch(err){console.log(err.message)}
  }

  useEffect(()=>{
    checkGuest('school-finder')
    // SecureStore.deleteItemAsync('school-finder').then(() => console.log('deleted key'))
  },[])

  return (
    <ThemeContextProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        {showOnboardingScreen ? <OnBoarding setShowOnboardingScreen={setShowOnboardingScreen}/> : <Navigation />}
      </SafeAreaProvider>
    </ThemeContextProvider>
  );
}
