import React from 'react'
import { View, Text} from 'react-native'
import { NativeBaseProvider, Center, Box, Button, Input} from 'native-base'

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
      <Center flex={1}>
        <Input size="lg" my={'2'} w={'75%'} variant={'underlined'} placeholder="Email" value={email} onChangeText={setEmail} />
        <Input size="lg" my={'2'} w={'75%'} variant={'underlined'} placeholder="Password" value={password} onChangeText={setPassword} />
        <Button my={'2'} w={'75%'} onPress={IsLoginIn}>Log in</Button>
      </Center>
    </NativeBaseProvider>
  )
}

export default Login