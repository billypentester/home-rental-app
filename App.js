import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BottomNavigation from './src/navigation/BottomNavigation';
import Welcome from './src/components/main/welcome';
import Login from './src/components/main/Login';
import Register from './src/components/main/Register';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);
  const [IsAuth, setIsAuth] = useState(false);

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('autenticated');
      if(value == null || value == 'false' || value == 'undefined'){
        setIsAuth(false);
      }
      else{
        setIsAuth(true);
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  useEffect(() => {
    async function prepare() {
      try {
        await readData();
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      } 
      catch (e) {
        console.warn(e);
      } 
      finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={IsAuth ? "BottomNavigation" : "Welcome"}>
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

