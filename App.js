import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import Navigation from './Navigation'

import { ThemeContextProvider } from './contexts/ThemeContext'

export default function App() {
  return (
    <ThemeContextProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Navigation />
      </SafeAreaProvider>
    </ThemeContextProvider>
  );
}
