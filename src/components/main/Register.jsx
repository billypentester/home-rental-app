import React from 'react'
import { View, Text} from 'react-native'
import { NativeBaseProvider, Center, Box, Button, Input} from 'native-base'

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
      <Center flex={1}>
        <Input size="lg" my={'2'} w={'75%'} variant={'underlined'} placeholder="Email" value={email} onChangeText={setEmail} />
        <Input size="lg" my={'2'} w={'75%'} variant={'underlined'} placeholder="Password" value={password} onChangeText={setPassword} />
        <Button my={'2'} w={'75%'} onPress={IsSignUp}>Sign up</Button>
      </Center>
    </NativeBaseProvider>
  )
}

export default Register