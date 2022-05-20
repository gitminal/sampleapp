import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screen/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screen/Signup';
import Dashnoard from './screen/Dashboard';
import ProductDetail from './screen/ProductDetail'
import ForgotPassword from './screen/ForgotPassword';
import { Provider } from 'react-redux'
import { store } from './redux/store';
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashnoard">


          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}
          />

          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" options={{ headerShown: false }} component={Signup}
          />
          <Stack.Screen name="Dashboard" component={Dashnoard} Options= {{ headerLeft: null}}/>

          <Stack.Screen name="ProductDetail" component={ProductDetail}

            options={({ route }) => {
              const { item } = route.params
              return {
                title: item.name,
                headerTitleStyle: {
                  fontSize: 12,
                  maxWidth: 250,
                },
                headerTitleAlign: 'center',
              }
            }}

          />
        

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}