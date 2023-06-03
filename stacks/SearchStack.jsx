import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// PAGES
import Home from '../pages/Home';
import School from '../pages/School';

export default function SearchStack() {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName={"Index"} >
      <Stack.Screen name="Index" component={Home} />
      <Stack.Screen name="School" component={School} />
    </Stack.Navigator>
  );
}