import { createContext, useEffect, useState } from "react";
import {useColorScheme} from 'react-native';
import * as SecureStore from 'expo-secure-store'

export default ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const colorScheme = useColorScheme();
    const SECURE_STORE_KEY = 'user_theme_setting'
    const [theme, setTheme] = useState(null)

    const storeUserThemeSetting = async () => {
        try{
            let userThemeSetting = await SecureStore.getItemAsync(SECURE_STORE_KEY)
            if(!userThemeSetting) userThemeSetting = await SecureStore.setItemAsync(SECURE_STORE_KEY, colorScheme)
            setTheme(userThemeSetting)
            setTheme('dark')
        }catch(error){console.log('ThemeContext.js', 'useEffect', error.message)}
    }

    const updateUserThemeSetting = async (theme) => {
        try{
            await SecureStore.setItemAsync(SECURE_STORE_KEY, theme)
            setTheme(theme)
        }catch(error){console.log('ThemeContext.js', 'updating user theme setting', error.message)}
    }

    useEffect(()=>{
        storeUserThemeSetting()
    },[])

    const APP_COLORS = {
        backgroundColor: (theme === "light") ? "#e6e6e6ff" : "#050811ff",
        themeOppositeColor: (theme === "light") ? "#050811ff" : "#e6e6e6ff",
        brandOrange: "#ff944cff",
        brandBlue: "#6b57b6ff",
        cardsColor: (theme === "light") ? "#ffffffff" : "#161333ff",
        bottomNavColors: {
            bg: (theme === "light") ? "#ffffffff" : "#0a1125ff",
            active: (theme === "light") ? "#0a1125ff" : "#ff944cff",
            inactive:  (theme === "light") ? "gray" : "gray"
        }
    }


    return (
    <ThemeContext.Provider value={{APP_COLORS, theme, updateUserThemeSetting}}>
        {children}
    </ThemeContext.Provider>
    )
}