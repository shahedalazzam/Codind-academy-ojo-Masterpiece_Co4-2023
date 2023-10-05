import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './src/screens/Landing/Landding';
import SignIn from './src/screens/AuthScreen/SignIn';
import SignUp from './src/screens/AuthScreen/SignUp';
import HomeScreen from './src/screens/Home/HomeScreen';
import Cart from './src/screens/Cart/Cart';
import Categories from './src/screens/Categories/Categories';
import Details from './src/screens/Details/Details';
import { AppProvider } from './src/context/AppContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShadowVisible: false, headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShadowVisible: false, headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShadowVisible: false, headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShadowVisible: false, headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShadowVisible: false, headerShown: false }} />
        <Stack.Screen name="Categories" component={Categories} options={{ headerShadowVisible: false, headerShown: true }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShadowVisible: false, headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
}
