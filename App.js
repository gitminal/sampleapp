import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screen/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screen/Signup';
import Forgotpassword from './screen/ForgotPassword';
import Dashnoard from './screen/Dashboard';
import ProductDetail from './screen/ProductDetail'
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Webviewproduct from './screen/Webviewproduct';
import Webview from './screen/Webview';
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}
          />
          <Stack.Screen name="Forgotpassword" component={Forgotpassword} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" options={{ headerShown: false }} component={Signup}
          />
          <Stack.Screen name="Dashboard" component={Dashnoard} options={{ headerLeft: null}} />

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
          <Stack.Screen name="Webview" component={Webview} />
          <Stack.Screen name="Webviewproduct" component={Webviewproduct} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}