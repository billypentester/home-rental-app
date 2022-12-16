import React from 'react'
import { View, ImageBackground, TouchableOpacity, LogBox  } from 'react-native'
import { NativeBaseProvider, Box, Input, Center, Image, Button, Text, Icon, Link, StatusBar} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './../../styles/index'
import pic from './../../images/background.jpg'
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from '@firebase/app'
import { firebaseConfig } from '../../Firebase/config'

LogBox.ignoreAllLogs();

const saveData = async () => {
  try {
    await AsyncStorage.setItem('autenticated', 'true')
  } catch (e) {
    alert('Failed to save the data to the storage')
  }
}

function Login({navigation}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const IsLoginIn = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        saveData();
        navigation.navigate("BottomNavigation", {screen: "Home"})
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        alert(errorCode)
      }
    );
    

  }

  return (
    <NativeBaseProvider>
      <StatusBar barStyle={'light-content'} />
      <ImageBackground source={pic} resizeMode="stretch" style={styles.background}>
        <View style={styles.wrapper}>
          <Center flex={2}>
            <Image source={{uri: "https://www.transparentpng.com/thumb/home/J4GYui-home-round-button-icon-png.png"}} alt="logo" size={'2xl'} />
          </Center>
          <Box flex={2} marginX={5}>
            <Text fontSize="4xl" textAlign={'center'} color={'gray.300'} marginY={'2'}>Hey! Welcome</Text>
            <KeyboardAwareScrollView>
            <Input InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} marginX="2" color="gray.300" />} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'white'} placeholder="Email" variant={'underlined'} onChangeText={text => setEmail(text)} value={email} />
            <Input InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} marginX="2" color="gray.300" />} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'white'} placeholder="Password" variant={'underlined'} onChangeText={text => setPassword(text)} value={password} />
            </KeyboardAwareScrollView>
            <Text textAlign={'center'}>
              <Link href="https://nativebase.io" _text={{color: "gray.200", fontSize:'md' }} textAlign={'end'} mt={-0.5} _web={{mb: -2}}>Forget Password ?</Link>
            </Text>
          </Box>
          <Center flex={1} m={5}>
            <Button size={'lg'} marginY={2} onPress={IsLoginIn} backgroundColor={'yellow.500'}_text={{color: "black" }} width={'100%'}>Login</Button>
            <TouchableOpacity onPress={()=>{ navigation.navigate('Register') }}>
              <Box marginY={2} flexDirection={'row'}>
                <Text fontSize="md" color={'gray.300'}>Don't have an acccount? </Text>
                <Text color={"gray.300"} fontSize={'md'}>Sign up</Text>
              </Box>
            </TouchableOpacity>
          </Center>
        </View>
      </ImageBackground>
    </NativeBaseProvider>
  )
}

export default Login