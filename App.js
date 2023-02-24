import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
 
// NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

// ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

// PAGES
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import FilterPage from './pages/FilterPage'
import SchoolInfoPage from './pages/SchoolInfo'
import SchoolsListPage from './pages/SchoolsList'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const TabScreenOptions = {
  initialRouteName: "Home",
  headerShown: false,
  tabBarActiveTintColor: "white",
  tabBarInactiveTintColor: "grey",
  tabBarStyle: { height: 60,paddingBottom: 5, backgroundColor: "#0b1226ff"},
  tabBarHideOnKeyboard: true,
}

const HomeStackScreenOptions = {
  initialRouteName: "home",
  headerShown: false,
}

const ExploreStackScreenOptions = {
  initialRouteName: "explore",
  headerShown: false,
}

const FilterStackScreenOptions = {
  initialRouteName: "filter",
  headerShown: false,
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light"/>
      <Tab.Navigator screenOptions={TabScreenOptions}>
        <Tab.Screen options={{tabBarLabel: "Home",tabBarIcon: ({color}) => <MaterialCommunityIcons name="home" size={35} color={color}/>}} name="home_stack" component={HomeStack} />
        <Tab.Screen options={{tabBarLabel: "Explore",tabBarIcon: ({color}) => <FaIcon name="search" size={32} color={color}/>}} name="explore_stack" component={ExploreStack} />
        <Tab.Screen options={{tabBarLabel: "Filter",tabBarIcon: ({color}) => <FaIcon name="filter" size={32} color={color}/>}} name="filter_stack" component={FilterStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = () => (
  <Stack.Navigator screenOptions={HomeStackScreenOptions} initialRouteName={"home"}>
    <Stack.Screen name="home" component={HomePage}/>
    <Stack.Screen name="school_info" component={SchoolInfoPage}/>
  </Stack.Navigator>
)

const ExploreStack = () => (
  <Stack.Navigator screenOptions={ExploreStackScreenOptions} initialRouteName={"explore"}>
    <Stack.Screen name="explore" component={SearchPage}/>
    <Stack.Screen name="schools_list" component={SchoolsListPage}/>
    <Stack.Screen name="school_info" component={SchoolInfoPage}/>
  </Stack.Navigator>
)

const FilterStack = () => (
  <Stack.Navigator screenOptions={FilterStackScreenOptions} initialRouteName={"filter"}>
    <Stack.Screen name="filter" component={FilterPage}/>
    <Stack.Screen name="school_list" component={SchoolsListPage}/>
    <Stack.Screen name="school_info" component={SchoolInfoPage}/>
  </Stack.Navigator>
)