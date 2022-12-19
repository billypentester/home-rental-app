import React, { useEffect } from 'react'
import { NativeBaseProvider, Box, Button, Text, Avatar, Center} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MaterialIcons} from "@expo/vector-icons";

function Setting({navigation}) {

  const [user, setUser] = React.useState('');

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('autenticated', 'false')
      await AsyncStorage.removeItem('user')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if(value == null || value == 'false' || value == 'undefined'){
        console.log('No data found');
      }
      else{
        setUser(JSON.parse(value));
      }
    } 
    catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  const logout = async() => {
    saveData();
    await navigation.navigate('Login')
  }

  useEffect(() => {
    readData();
  }, [])

  return (
    <NativeBaseProvider>
      <Box flex={1} >
        <Box backgroundColor={'#1E293B'}>
          <Avatar position={'relative'} top={'50%'} left={'3%'} size="xl" m={1} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxFBXtxpsxNhINJ5opoMXgSkTqfiZLbjtymhvWqMO2XvAwAWEEktCDVLQlq2ojTfz_Ls&usqp=CAU"}}/>
        </Box>
        <Box flex={1} alignItems={'flex-end'} marginY={'2'} marginX={'5'}>
          <Button size={'md'} backgroundColor={'gray.800'}  onPress={()=>{ navigation.navigate('Edit Profile') }}>Edit Profile</Button>
        </Box>
        <Box marginY={1} marginX={'5'}>
          <Text fontSize={"xl"} fontWeight={'bold'} color={'black'}>{user.displayName}</Text>
          <Text fontSize={"md"} color={'black'}>{user.email}</Text>
        </Box>
        </Box>
      <Box flex={2} marginX={5} marginY={1}>
        <Box marginY={'1'}>
          <Box backgroundColor={"gray.300"} rounded={'md'}>
            <Text fontSize={"md"} color={'black'} paddingY={'1'} paddingX={'3'} >Content</Text>
          </Box>
          <Box mt={'2'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Text fontSize={"md"} color={'black'} paddingY={'1'} paddingX={'3'}>My Places</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} paddingY={'1'} paddingX={'3'} color="black" />
          </Box>
          <Box mt={'2'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Text fontSize={"md"} color={'black'} paddingY={'1'} paddingX={'3'}>My Favourites</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} paddingY={'1'} paddingX={'3'} color="black" />
          </Box>
          <Box mt={'2'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Text fontSize={"md"} color={'black'} paddingY={'1'} paddingX={'3'}>My Bookmarks</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} paddingY={'1'} paddingX={'3'} color="black" />
          </Box>
        </Box>
        <Box marginY={'1'}>
          <Box backgroundColor={"gray.300"} rounded={'md'}>
            <Text fontSize={"md"} color={'black'} paddingY={'1'} paddingX={'3'} >Preference</Text>
          </Box>
          <Box mt={'2'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Text fontSize={"md"} color={'black'} paddingY={'1'} paddingX={'3'}>Location</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} paddingY={'1'} paddingX={'3'} color="black" />
          </Box>
          <Box mt={'2'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Text fontSize={"md"} color={'black'} paddingY={'1'} paddingX={'3'}>Payment</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} paddingY={'1'} paddingX={'3'} color="black" />
          </Box>
        </Box>
        <Button size={'md'} backgroundColor={'gray.700'} m={'5'} onPress={logout}>Log out</Button>
      </Box>
    </NativeBaseProvider>
  )
}

export default Setting