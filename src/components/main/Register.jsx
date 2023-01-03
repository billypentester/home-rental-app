import React from 'react'
import { View, ImageBackground,TouchableOpacity,Pressable } from 'react-native'
import { NativeBaseProvider, Box, Input, Center, Image, Button, Text, Icon, Link} from 'native-base'
import styles from './../../styles/index'

import { MaterialIcons } from "@expo/vector-icons";

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from '@firebase/app'
import { firebaseConfig } from '../../Firebase/config'

function Register({navigation}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showpass,setShowpass] = React.useState(true)

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const IsSignUp = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User created");
        navigation.navigate('Location')
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
      <ImageBackground source={require("home-rental-app/assets/bg.png")} resizeMode="stretch" style={styles.background}>
          <View style={styles.wrapper}>
            <Center flex={1.5} justifyContent="center" alignItems="center">
              <Image source={require("home-rental-app/assets/logo.png")} alt="logo" width={'50%'} height={'50%'} />
            </Center>
            <Box flex={6} margin={5}>
            <Text fontSize="4xl" textAlign={'center'} fontWeight={"800"} color={'gray.300'} marginY={'2'}>Register</Text>
            <Input InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={6} marginX="2" color="gray.300" />} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'white'} placeholder="User Name" variant={"rounded"} keyboardType={"default"} maxLength={25}/>
              <Input InputLeftElement={<Icon as={<MaterialIcons name="mail" />} size={6} marginX="2" color="gray.300" />} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'white'} placeholder="Email" variant={"rounded"} keyboardType={"email-address"} value={email} onChangeText={setEmail}/>
              <Input type={showpass ? "password" : "text"} InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={6} marginX="2" color="gray.300" />} InputRightElement={<Pressable onPress={() => setShowpass(!showpass)}>
            <Icon as={<MaterialIcons name={showpass ? "visibility-off" : "visibility"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'white'} placeholder="Password" variant={'rounded'} keyboardType={"password"}  value={password} onChangeText={setPassword} />
              

              <Button size={'lg'} marginY={5} onPress={IsSignUp} backgroundColor={'#344D67'}_text={{color: "white",fontWeight:"600" }} width={'100%'}>Sign In</Button>
              <Center marginY={2} _text={{ color:'gray.300', fontSize:'md' }}>or</Center>
              <Box justifyContent={'space-around'} alignContent={'space-around'} flexDirection={'row'}>
                <Button onPress={()=>navigation.navigate("Login")} size={'lg'} marginY={2} backgroundColor={'red.500'} _text={{color: "white",fontWeight:"600" }} width={'45%'}>Google</Button>
                <Button  size={'lg'} marginY={2} backgroundColor={'blue.500'} _text={{color: "white",fontWeight:"600" }} width={'45%'}>Facebook</Button>              
              </Box>
              <Center marginY={2} flexDirection={'row'}>
                <Text color={'gray.300'} fontSize={'md'}>Already have an account? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}> 
              <Text style={{color: "white", fontSize:15, textDecorationLine:"underline"}}>Log In</Text>
              </TouchableOpacity> 
              </Center>
            </Box>
          </View>
      </ImageBackground>
    </NativeBaseProvider>
  )
}

export default Register