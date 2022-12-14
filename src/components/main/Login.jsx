import React from 'react'
import { View, ImageBackground,TouchableOpacity } from 'react-native'
import { NativeBaseProvider, Box, Input, Center, Image, Button, Text, Icon, Link,Alert,Pressable} from 'native-base'
import styles from './../../styles/index'
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from 'react-native-svg';

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from '@firebase/app'
import { firebaseConfig } from '../../Firebase/config'


function Login({navigation}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showpass,setShowpass] = React.useState(true)

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const IsLoginIn = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in");
        navigation.navigate('BottomNavigation', {screen: 'Explore'})
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
      <View width={"100%"} height={"100%"}>
      <ImageBackground source={require("home-rental-app/assets/bg.png")} resizeMode="stretch" style={styles.background}>
        <View style={styles.wrapper}>
          <Center flex={2} >
            <Image source={require("home-rental-app/assets/logo.png")} alt="logo" width={'80%'} height={'50%'} />
          </Center>
          <Box flex={2} marginX={5}>
            <Text fontSize="4xl" textAlign={'center'} fontWeight={"800"} color={'gray.300'} marginY={'2'} >Login</Text>
            <Input InputLeftElement={<Icon as={<MaterialIcons name="mail" />} size={6} marginX="2" color="gray.300" />} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'white'} placeholder="Email" variant={"rounded"} keyboardType={"email-address"} value={email} onChangeText={setEmail} />
            <Input type={showpass ? "password" : "text"} InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={6} marginX="2" color="gray.300" />} InputRightElement={<Pressable onPress={() => setShowpass(!showpass)}>
            <Icon as={<MaterialIcons name={showpass ? "visibility-off" : "visibility"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} focusOutlineColor={'yellow.500'} marginY={'5'} size="lg" color={'white'} placeholder="Password" variant={'rounded'} keyboardType={"password"}  value={password} onChangeText={setPassword} />
            
            <TouchableOpacity style={{alignItems:"center",marginTop:3}}>
              <Text style={{color: "white", fontSize:16,textDecorationLine:"underline" }} >Forget Password ?</Text>
            </TouchableOpacity>
          </Box>
          <Center flex={1} m={4}>
          <Button size={'lg'} marginY={5} onPress={IsLoginIn} backgroundColor={'#344D67'}_text={{color: "white",fontWeight:"600" }} width={'100%'}>Log In</Button>
            <Box marginY={2} flexDirection={'row'}>
              <Text fontSize={15} color={'gray.300'}>Don't have an acccount? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Register")}> 
              <Text style={{color: "white", fontSize:15, textDecorationLine:"underline"}}>Sign up</Text>
              </TouchableOpacity> 
            </Box>
          </Center>
        </View>
      </ImageBackground>

      </View>
    </NativeBaseProvider>
      
  )
}


export default Login