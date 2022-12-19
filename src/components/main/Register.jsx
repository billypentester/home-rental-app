import React from 'react'
import { View, ImageBackground, TouchableOpacity } from 'react-native'
import { NativeBaseProvider, Box, Input, Center, Image, Button, Text, Icon, Link} from 'native-base'
import styles from './../../styles/index'
import pic from './../../images/background.jpg'
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { initializeApp } from '@firebase/app'
import { firebaseConfig } from '../../Firebase/config'

function Register({navigation}) {

  const [displayName, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  var user = null;

  const saveData = async (user) => {
    try {
      await AsyncStorage.setItem('autenticated', 'true')
      await AsyncStorage.setItem('user', JSON.stringify(user))
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const IsSignUp = async() => {

    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    console.log(`User ${user.uid} created`)
    await updateProfile(user, {
      displayName: displayName
    })
    .then(() => {
      saveData(user);
    })
    .then(() => {
      setName('');
      setEmail('');
      setPassword('');
    })
    .then(() => {
      navigation.navigate('BottomNavigation', {screen: 'Home'})
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      alert(errorCode)
    });

  }

  return (
    <NativeBaseProvider>
      <ImageBackground source={pic} resizeMode="stretch" style={styles.background}>
          <View style={styles.wrapper}>
            <Center flex={2} justifyContent="center" alignItems="center">
              <Image source={{uri: "https://www.transparentpng.com/thumb/home/J4GYui-home-round-button-icon-png.png"}} alt="logo" size={'xl'} />
            </Center>
            <Box flex={6} margin={5}>
              <Text fontSize="3xl" textAlign={'center'} color={'gray.300'} marginY={'2'}>Hey! Welcome</Text>
              <Input InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} marginX="2" color="gray.300" />} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'white'} placeholder="Full Name" variant={'underlined'} onChangeText={text => setName(text)} value={displayName} />
              <Input InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} marginX="2" color="gray.300" />} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'white'} placeholder="Email" variant={'underlined'} onChangeText={text => setEmail(text)} value={email} />
              <Input InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} marginX="2" color="gray.300" />} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'white'} placeholder="Password" variant={'underlined'} onChangeText={text => setPassword(text)} value={password} />
              <Button size={'lg'} marginY={2} onPress={IsSignUp} backgroundColor={'yellow.500'}_text={{color: "black" }} width={'100%'}>Sign up</Button>
              <Center marginY={2} _text={{ color:'gray.300', fontSize:'md' }}>or</Center>
              <Box justifyContent={'space-around'} alignContent={'space-around'} flexDirection={'row'}>
                <Button size={'lg'} marginY={2} backgroundColor={'red.500'} _text={{color: "white" }} width={'45%'}>Google</Button>
                <Button size={'lg'} marginY={2} backgroundColor={'blue.500'} _text={{color: "white" }} width={'45%'}>Facebook</Button>              
              </Box>
              <TouchableOpacity onPress={()=>{ navigation.navigate('Login') }}>
                <Center marginY={2} flexDirection={'row'}>
                  <Text color={'gray.300'} fontSize={'md'}>Already have an account? </Text>
                  <Text color={"gray.300"} fontSize={'md'}>Login</Text>
                </Center>
              </TouchableOpacity>
            </Box>
          </View>
      </ImageBackground>
    </NativeBaseProvider>
  )
}

export default Register