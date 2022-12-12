import React from 'react'
import { View, ImageBackground } from 'react-native'
import { NativeBaseProvider, Box, Input, Center, Image, Button, Text, Icon, Link} from 'native-base'
import styles from './../../styles/index'
import pic from './../../images/background.jpg'
import { MaterialIcons } from "@expo/vector-icons";

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from '@firebase/app'
import { firebaseConfig } from '../../Firebase/config'

function Register({navigation}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const IsSignUp = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User created");
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
            <Center flex={2} justifyContent="center" alignItems="center">
              <Image source={{uri: "https://i.pinimg.com/originals/5e/10/d7/5e10d70b73f61c76194ef63da8f5c22a.png"}} alt="logo" width={'50%'} height={'60%'} />
            </Center>
            <Box flex={2} marginX={5}>
              <Text fontSize="4xl" textAlign={'center'} color={'gray.300'} marginY={'2'}>Hey! Welcome</Text>
              <Input InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} marginX="2" color="gray.300" />} marginY={'5'} size="lg" color={'white'} placeholder="Email" variant={'underlined'} />
              <Input InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} marginX="2" color="gray.300" />} marginY={'5'} size="lg" color={'white'} placeholder="Password" variant={'underlined'} />
              <Link href="https://nativebase.io" _text={{color: "gray.200" }} textAlign={'end'} mt={-0.5} _web={{mb: -2}}>Forget Password ?</Link>
            </Box>
            <Center flex={1} m={5}>
              <Button size={'lg'} marginY={2} onPress={IsSignUp} backgroundColor={'gray.300'}_text={{color: "black" }} variant="outline" width={'100%'}>Login</Button>
              <Text marginY={2} color={'gray.300'}>Don't have an acccount? Sign up</Text>
            </Center>
          </View>
      </ImageBackground>
    </NativeBaseProvider>
  )
}

export default Register