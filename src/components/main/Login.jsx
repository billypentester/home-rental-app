import React from 'react'
import { View, ImageBackground } from 'react-native'
import { NativeBaseProvider, Box, Input, Center, Image, Button, Text, Icon, Link} from 'native-base'
import styles from './../../styles/index'
import pic from './../../images/background.jpg'
import { MaterialIcons } from "@expo/vector-icons";

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from '@firebase/app'
import { firebaseConfig } from '../../Firebase/config'

function Login({navigation}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const IsLoginIn = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in");
        navigation.navigate('BottomNavigation', {screen: 'Home'})
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
      <ImageBackground source={pic} resizeMode="stretch" style={styles.background}>
        <View style={styles.wrapper}>
          <Center flex={2}>
            <Image source={{uri: "https://www.transparentpng.com/thumb/home/J4GYui-home-round-button-icon-png.png"}} alt="logo" width={'50%'} height={'50%'} />
          </Center>
          <Box flex={2} marginX={5}>
            <Text fontSize="4xl" textAlign={'center'} color={'gray.300'} marginY={'2'}>Hey! Welcome</Text>
            <Input InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} marginX="2" color="gray.300" />} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'white'} placeholder="Email" variant={'underlined'} />
            <Input InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} marginX="2" color="gray.300" />} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'white'} placeholder="Password" variant={'underlined'} />
            <Text textAlign={'center'}>
              <Link href="https://nativebase.io" _text={{color: "gray.200", fontSize:'md' }} textAlign={'end'} mt={-0.5} _web={{mb: -2}}>Forget Password ?</Link>
            </Text>
          </Box>
          <Center flex={1} m={5}>
            <Button size={'lg'} marginY={2} onPress={IsLoginIn} backgroundColor={'yellow.500'}_text={{color: "black" }} width={'100%'}>Login</Button>
            <Box marginY={2} flexDirection={'row'}>
              <Text fontSize="md" color={'gray.300'}>Don't have an acccount? </Text>
              <Link href="https://nativebase.io" _text={{color: "gray.300", fontSize:'md'}}>Sign up</Link>
            </Box>
          </Center>
        </View>
      </ImageBackground>
    </NativeBaseProvider>
  )
}

export default Login