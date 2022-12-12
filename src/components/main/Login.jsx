import React from 'react'
import { View, ImageBackground, Dimensions, TextInput, Input} from 'react-native'
import { NativeBaseProvider, Center, Image, Text, Button} from 'native-base'
import styles from './../../styles/index'
import pic from './../../images/background.jpg'


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
            <Center flex={1}>
              <Text fontSize="4xl" color={'gray.300'} marginY={'2'}>Hey! Welcome</Text>
              <Text fontSize="xl" color={'gray.300'}>Rent out of 1500 places, Visit new beautiful places.</Text>
            </Center>
          </View>
      </ImageBackground>
    </NativeBaseProvider>
  )
}

export default Login