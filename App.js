import MainScreen from './app/screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodListScreen from './app/screens/FoodListScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{ title: 'Welcome' ,headerShown:false}}
        />
        <Stack.Screen
          name="Food List"
          component={FoodListScreen}
          options={{ title: 'json',headerShown:false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
    // <MainScreen/>
                
   
  );
}


