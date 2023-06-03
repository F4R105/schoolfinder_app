import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

// PAGES
import Settings from './pages/Settings';

// STACKS
import SearchStack from './stacks/SearchStack'
import FilterStack from './stacks/FilterStack'

// CONTEXTS
import ThemeContext from './contexts/ThemeContext';

function BottomTabs() {

  const {APP_COLORS} = React.useContext(ThemeContext)

  const TabScreenOptions = {
    initialRouteName: "home-stack",
    headerShown: false,
    tabBarActiveTintColor: APP_COLORS.bottomNavColors.active,
    tabBarInactiveTintColor: APP_COLORS.bottomNavColors.inactive,
    tabBarStyle: { height: 65,paddingBottom: 5,paddingTop: 5, backgroundColor: APP_COLORS.bottomNavColors.bg},
    tabBarHideOnKeyboard: true,
  }


  return (
    <Tab.Navigator screenOptions={TabScreenOptions}>
      <Tab.Screen name="home-stack" component={SearchStack}  options={{tabBarLabel: "HOME",tabBarIcon: ({color}) => <Ionicons name="home" size={32} color={color} />}}/>
      <Tab.Screen name="filter-stack" component={FilterStack}  options={{tabBarLabel: "FILTER",tabBarIcon: ({color}) => <Ionicons name="ios-funnel" size={32} color={color} />}}/>
      <Tab.Screen name="settings" component={Settings}  options={{tabBarLabel: "SETTINGS",tabBarIcon: ({color}) => <Ionicons name="settings" size={32} color={color} />}}/>
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}