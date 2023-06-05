import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// PAGES
import Filter from '../pages/Filter';
import Matches from '../pages/Matches';
import School from '../pages/School';

export default function FilterStack() {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName={"Index"}>
      <Stack.Screen name="Index" component={Filter} />
      <Stack.Screen name="Matches" component={Matches} />
      <Stack.Screen name="School" component={School} />
    </Stack.Navigator>
  );
}