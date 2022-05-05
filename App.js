import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screen/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from './constant/Colors';
import Signup from './screen/Signup';
import Forgotpassword from './screen/Forgotpassword';

const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Login" component={Login} options={{
          title: 'Welcome', headerStyle: {
            backgroundColor: Colors.white
          }
        }} />
         <Stack.Screen name="Forgotpassword" component={Forgotpassword}/>
        <Stack.Screen name="Signup" component={Signup} options={{
          title: 'Welcome', headerStyle: {
            backgroundColor: Colors.white
          }
        }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}