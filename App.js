import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomNavigation from './src/navigation/BottomNavigation';
import Welcome from './src/components/main/welcome';
import Login from './src/components/main/Login';
import Register from './src/components/main/Register';
import Edit from './src/components/user/Profile/Edit';
import Cam from './src/components/user/Profile/Camera.';
import { Camera } from 'expo-camera';
import Filter from './src/components/user/Explore/Filter';
import Location from './src/components/main/Location';
import Properties from './src/components/user/Explore/Properties';
import AddProperty from './src/components/user/Explore/AddProperty';
import ShowProperties from './src/components/user/Profile/ShowProperties';
import MyPlaces from './src/components/user/Profile/MyPlaces';
import Bookings from './src/components/user/Profile/Bookings';
import Details from './src/components/user/Explore/Details';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="AddProperty" component={AddProperty} />
        <Stack.Screen name="MyPlaces" component={MyPlaces} />
        <Stack.Screen name="Bookings" component={Bookings} />
        <Stack.Screen name="Properties" component={Properties} />
        <Stack.Screen name="Details" component={Details} />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
}

