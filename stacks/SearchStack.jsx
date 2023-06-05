import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// PAGES
import Home from '../pages/Home';
import Matches from '../pages/Matches';
import School from '../pages/School';

export default function SearchStack() {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName={"Index"} >
      <Stack.Screen name="Index" component={Home} />
      <Stack.Screen name="Matches" component={Matches} />
      <Stack.Screen name="School" component={School} />
    </Stack.Navigator>
  );
}