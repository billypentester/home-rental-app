import React, {useEffect} from 'react'
import { View, Text} from 'react-native'
import { NativeBaseProvider, Center, Box} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../../Firebase/autentication';
import { useIsFocused } from "@react-navigation/native";

const readData = async () => {
  try {
    const value = await AsyncStorage.getItem('autenticated');
    
  } catch (e) {
    alert('Failed to fetch the input from storage : Find Screen');
  }
};

function Find() {

  const isVisible = useIsFocused();

  const [user, setUser] = React.useState(auth.currentUser);

  React.useEffect(() => {
    readData();
  }, [isVisible]);

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>
          <Text>Welcome {auth.currentUser.displayName}</Text>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Find