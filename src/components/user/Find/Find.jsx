import React, {useEffect} from 'react'
import { View, Text} from 'react-native'
import { NativeBaseProvider, Center, Box} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../../Firebase/autentication';

const readData = async () => {
  try {
    const value = await AsyncStorage.getItem('autenticated');
    const user = await AsyncStorage.getItem('user');
    console.log("I'm authenticated: ", value);
    console.log("User: ", JSON.parse(user).email);
  } catch (e) {
    alert('Failed to fetch the input from storage : Find Screen');
  }
};

readData();

function Find() {

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Find Screen</Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Find