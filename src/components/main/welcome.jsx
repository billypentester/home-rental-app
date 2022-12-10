import React from 'react'
import { View, ImageBackground, Dimensions, TextInput} from 'react-native'
import { NativeBaseProvider, Center, Box, Image, VStack, Text, Button} from 'native-base'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function Welcome({navigation}) {

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={{uri:'https://images.unsplash.com/photo-1541323716073-dda4bffc2fbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',}} resizeMode="stretch"
        style={{height: screenHeight, width: screenWidth, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{ flex:1, backgroundColor: 'rgba(0,0,0,0.5)',width:screenWidth }}>
            <Center flex={2} justifyContent="center" alignItems="center" safeAreaTop>
              <Image source={{uri: "https://i.pinimg.com/originals/5e/10/d7/5e10d70b73f61c76194ef63da8f5c22a.png"}} alt="logo" width={'62%'} height={'70%'} />
            </Center>
            <Center flex={1}>
              <Text fontSize="4xl" color={'gray.300'} marginY={'2'}>Hey! Welcome</Text>
              <Text fontSize="xl" color={'gray.300'}>Rent out of 1500 places, Visit new beautiful places.</Text>
            </Center>
            <Center flex={1} paddingX={6}>
              <Button size={'lg'} marginY={1}  backgroundColor={'yellow.500'} width={'100%'} onPress={() => navigation.navigate('Login')}>Login</Button>
              <Button size={'lg'} marginY={1} backgroundColor={'gray.700'} width={'100%'} onPress={() => navigation.navigate('Register')}>Create Account</Button>
            </Center>
          </View>
      </ImageBackground>
    </NativeBaseProvider>
  )
}

export default Welcome